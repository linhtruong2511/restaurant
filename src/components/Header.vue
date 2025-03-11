<template>
  <header>
    <div class="logo">
      <RouterLink to="/">
        <img src="../assets/logo.svg" alt="Logo">
        <h2>GOGO</h2>
      </RouterLink>
    </div>
    <div class="navbar">
      <RouterLink to="/menu" class="navbar__menu">Thực đơn</RouterLink>
      <RouterLink to="/booking" class="navbar__order">Đặt bàn</RouterLink>
      <RouterLink v-if="userStore.info && (userStore.info['is_staff'] || userStore.info['is_superuser'])" to="/order"
        class="navbar__order">
        Order khách</RouterLink>
    </div>
    <div class="wrapper-right">
      <div @click="handleLinkToBooking" class="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="badge">{{ cartStore.count }}</span>
      </div>
      <div @click="handleClickAccount" class="account">
        <div class="avatar">
          <img ref="userImage" src="../assets/user.png" alt="Avatar">
        </div>
        <p ref="username" class="username"></p>
      </div>
    </div>
    <div v-if="showDropdownAccountButton" class="overlay" @click="showDropdownAccountButton = false">
      <ul v-show="showDropdownAccountButton" class="dropdown-account">
        <li @click="router.push('profile')">Thông tin tài khoản</li>
        <li @click="handleLogout">Đăng xuất</li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { getInfoUser } from '@/service/accountService';
import { setCookie } from '@/service/utils';
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const cartStore = useCartStore()
const username = ref(null);
const userImage = ref(null);
const showDropdownAccountButton = ref(false);
const isLogged = ref(false);
const router = useRouter();

const handleClickAccount = () => {
  if (isLogged.value) {
    showDropdownAccountButton.value = !showDropdownAccountButton.value;
  } else {
    router.push('login');
  }
};

const initAccount = () => {
  const info = userStore.info;
  if (info) {
    isLogged.value = true;
    username.value.textContent = userStore.info['username'];
    if (userStore.info['avatar'] != null) {
      userImage.value.src = userStore.info['avatar'];
    }
  }
};

const handleLogout = () => {
  setCookie('token', '', null);
  window.location.reload();
};
const handleLinkToBooking = () => {
  router.push('booking')
}
onMounted(async () => {
  await getInfoUser();
  initAccount();
});
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  /* Thay đổi màu nền */
  align-items: center;
  padding: 10px 30px;
  /* Tăng padding */
  position: sticky;
  top: 0;
  min-height: 70px;
  /* Tăng chiều cao */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Thêm bóng đổ */
  z-index: 100;
  /* Đảm bảo header ở trên cùng */
}

.logo a {
  color: #333;
  /* Thay đổi màu chữ */
  display: flex;
  /* Sử dụng flex để căn chỉnh logo và text */
  align-items: center;
  text-decoration: none;
}

.logo a:active {
  color: #333;
}

.logo h2 {
  margin-left: 10px;
  font-size: 24px;
  /* Tăng kích thước chữ */
  font-weight: 600;
}

.logo img {
  height: 35px;
  /* Tăng kích thước logo */
}

.account {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  /* Thêm cursor pointer */
}

.navbar a {
  color: #333;
  font-size: 16px;
  margin-right: 25px;
  text-decoration: none;
  transition: color 0.3s ease;
  /* Thêm transition */
}

.navbar a:hover {
  color: #ff6600;
  /* Thay đổi màu khi hover */
}

.wrapper-right {
  display: flex;
  align-items: center;
  gap: 30px
}

.cart {
  position: relative;
  cursor: pointer;
}

.badge {
  position: absolute;
  top: -10px;
  left: 25px;
}

.avatar img {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  border: 1px solid #ddd;
  /* Thêm border */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
}

.dropdown-account {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  right: 20px;
  /* Điều chỉnh vị trí */
  top: 70px;
  /* Điều chỉnh vị trí */
  list-style: none;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-account li {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-account li:hover {
  background-color: #f0f0f0;
}
</style>
