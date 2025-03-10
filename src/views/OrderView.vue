<template>
  <div class="order-page">
    <div class="booking-section">
      <h2>Đặt Bàn</h2>
      <form @submit.prevent="submitBooking">
        <input type="text" placeholder="Tên" v-model="booking.name" required>
        <input type="tel" placeholder="Số điện thoại" v-model="booking.phone" required>
        <input type="email" placeholder="Email" v-model="booking.email">
        <input type="number" placeholder="Số lượng người" v-model="booking.guests" required>
        <input type="datetime-local" v-model="booking.dateTime" required>
        <button type="submit">Đặt Bàn</button>
      </form>
    </div>

    <div class="menu-section">
      <h2>Chọn Món</h2>
      <ul class="category-list">
        <li v-for="category in categories" :key="category" @click="selectCategory(category)"
          :class="{ active: selectedCategory === category }">{{ category }}</li>
      </ul>
      <div class="menu-items">
        <div v-for="item in filteredMenuItems" :key="item.id" class="menu-item">
          <img src="../assets/anh1.jpg" :alt="item.name">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} VNĐ</p>
          <button @click="addToCart(item)">Thêm vào giỏ</button>
        </div>
      </div>
    </div>

    <div class="cart-section">
      <h2>Giỏ Hàng</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.quantity }} x {{ item.price }} VNĐ
          <button @click="removeFromCart(item)">Xóa</button>
        </li>
      </ul>
      <p>Tổng tiền: {{ total }} VNĐ</p>
      <button @click="confirmOrder">Xác Nhận Đặt Hàng</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Dữ liệu mẫu (thay thế bằng dữ liệu thực tế)
const categories = ['Khai vị', 'Món chính', 'Tráng miệng', 'Tráng miệng', 'Tráng miệng', 'Tráng miệng',];
const menuItems = [
  { id: 1, name: 'Gỏi cuốn', category: 'Khai vị', price: 50000, image: '../assets/anh1.jpg' },
  { id: 4, name: 'Gỏi cuốn', category: 'Khai vị', price: 50000, image: '../assets/anh1.jpg' },
  { id: 2, name: 'Phở bò', category: 'Món chính', price: 80000, image: '../assets/anh2.jpg' },
  { id: 3, name: 'Chè thái', category: 'Tráng miệng', price: 30000, image: '../assets/anh3.jpg' },
  // ... thêm các món khác
];

const booking = ref({ name: '', phone: '', email: '', guests: 1, dateTime: '' });
const selectedCategory = ref(categories[0]);
const cart = ref([]);

const filteredMenuItems = computed(() => {
  return menuItems.filter(item => item.category === selectedCategory.value);
});

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const addToCart = (item) => {
  const existingItem = cart.value.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({ ...item, quantity: 1 });
  }
};

const removeFromCart = (item) => {
  const index = cart.value.findIndex(cartItem => cartItem.id === item.id);
  if (index !== -1) {
    cart.value.splice(index, 1);
  }
};

const submitBooking = () => {
  // Xử lý đặt bàn (gửi dữ liệu đến server)
  console.log('Booking:', booking.value);
};

const confirmOrder = () => {
  // Xử lý xác nhận đặt hàng (gửi dữ liệu đến server)
  console.log('Order:', { booking: booking.value, cart: cart.value });
};
</script>
<style scoped>
.order-page {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 30px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
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
}

.booking-section form {
  display: grid;
  gap: 15px;
}

.booking-section input,
.booking-section button {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.booking-section button {
  background-color: #ff6600;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.booking-section button:hover {
  background-color: #e65c00;
}

.category-list {
  list-style: none;
  padding: 0;
  display: flex;
  margin-bottom: 20px;
  overflow-x: auto;
  max-width: 480px;
}

.category-list li {
  padding: 12px 20px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}

.category-list li.active,
.category-list li:hover {
  background-color: #f0f0f0;
}

.menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.menu-item {
  text-align: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.menu-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.menu-item h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.menu-item p {
  color: #888;
  margin-bottom: 10px;
}

.menu-item button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-item button:hover {
  background-color: #218838;
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
</style>
