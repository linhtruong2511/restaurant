<template>
  <div class="booking-page">
    <div class="booking-section">
      <FormSubmit />
    </div>
    <div v-if="cartStore.count !== 0" class="menu-section">
      <div class="menu-section-header">
        <h2>Danh sách các món</h2>
        <h2 style="color: #1dbc60;">Tổng: {{ cartStore.total }}.000 VNĐ</h2>
      </div>
      <div class="menu-items">
        <div v-for="el in cartStore.items" :key="el.id" class="menu-item">
          <div class="item-content">
            <img :src="el.item.image">
            <h3 class="item-name">{{ el.item.name }}</h3>
            <p class="item-price">{{ el.item.price }}000 VNĐ / Suất</p>
          </div>
          <div class="item-action">
            <button class="decrement-btn" @click="cartStore.decrementItem(el)">-</button>
            <p>{{ el.quantity }}</p>
            <button class="increment-btn" @click="cartStore.incrementItem(el)">+</button>
            <button class="delete-btn" @click="cartStore.removeFromCart(el)">Xóa</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="bookingSuccess" class="menu-section menu-section-oops">
      <p>Bạn đã đặt bàn thành công, phản hồi sẽ được gửi tới mail của bạn !!!</p>
    </div>
    <div v-else-if="bookingFail" class="menu-section menu-section-oops">
      <p>Thông tin không hợp lệ vui lòng thử lại hoặc liên hệ tới nhà hàng </p>
    </div>
    <div @click="router.push('menu')" v-else class="menu-section menu-section-oops">
      <img class="oops" src="../assets/oops.jpg" alt="">
      <p>Menu rỗng, hãy quay lại thực đơn !!!</p>
    </div>
  </div>
</template>

<script setup>
import FormSubmit from '@/components/FormSubmit.vue';
import router from '@/router';
import { useCartStore } from '@/stores/cart';
import { ref, computed } from 'vue';

const cartStore = useCartStore()
const bookingSuccess = ref(false)
const bookingFail = ref(false)


</script>
<style scoped>
.booking-page {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
  max-height: 600px;
}

@media (max-width: 1200px) {
  .booking-page {
    display: flex;
    flex-direction: column;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
  }

}

.booking-section,
.menu-section,
.cart-section {
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.booking-section h2,
.menu-section h2,
.cart-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}


.menu-section {
  max-height: 400px;
  overflow: auto;
}

.menu-section-header {
  display: flex;
  justify-content: space-between;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-bottom: 10px;
  overflow: auto;
}

.item-content {
  display: flex;
  gap: 10px;
  align-items: center;
}

.item-action {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-item button {
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.increment-btn,
.decrement-btn {
  background-color: #0069d9;
}

.delete-btn {
  background-color: #dc3545;
}


.menu-item:hover {
  transform: translateY(-5px);
}

.menu-item img {
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}

.menu-item h3 {
  font-size: 18px;
}

.menu-item p {
  color: #888;
}


.increment-btn:hover,
.decrement-btn:hover {
  background-color: #007bff;
}

.delete-btn:hover {
  background-color: #c82333;
}

.cart-section ul {
  list-style: none;
  padding: 0;
}

.cart-section li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.cart-section li button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cart-section li button:hover {
  background-color: #c82333;
}

.cart-section p {
  font-size: 18px;
  margin-top: 20px;
  text-align: right;
}

.cart-section button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 20px;
}

.cart-section button:hover {
  background-color: #0069d9;
}

.menu-section-oops {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.oops {
  height: 150px;
}
</style>
