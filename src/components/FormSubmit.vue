<template>
  <div>
    <h2>Đặt Bàn</h2>
    <form @submit.prevent="submitBooking">
      <label for="number">Số lượng người</label>
      <input type="number" id="number" max="10" min="1" v-model="booking.number_of_guests">
      <label for="datetime">Thời gian</label>
      <input type="datetime-local" id="datetime" v-model="booking.dateTime">
      <button type="submit">Đặt Bàn</button>
    </form>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const booking = ref({ number_of_guests: 1, dateTime: '' });
const cartStore = useCartStore()
const bookingSuccess = ref(false)
const bookingFail = ref(false)
const userStore = useUserStore()

const submitBooking = async () => {
  if (!userStore.active) {
    router.push('login')
  }
  if (cartStore.count == 0) {
    router.push('menu')
  }

  const data = {
    take_away: true,
    items: cartStore.getListItem(),
    number_of_guests: booking.value.number_of_guests,
    order_date: booking.value.dateTime
  }

  const ok = await cartService.booking(data)
  console.log('booking success: ', ok)

  cartStore.items = []
  if (ok) {
    bookingSuccess.value = true
  }
  else {
    bookingFail.value = true
  }
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

form {
  display: grid;
  gap: 15px;
}

input,
button {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

button {
  background-color: #ff6600;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e65c00;
}
</style>
