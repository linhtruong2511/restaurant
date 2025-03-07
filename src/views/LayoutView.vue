<template>
  <header>
    <div class="logo">
      <RouterLink to="/">
        <img src="../assets/logo.svg" alt="">
        <h2>GOGO</h2>
      </RouterLink>
    </div>
    <div class="navbar">
      <RouterLink to="/menu" class="navbar__menu">Thực đơn</RouterLink>
      <RouterLink to="/order" class="navbar__order">Đặt bàn</RouterLink>
    </div>
    <div @click="handleClickAccount" class="account">
      <div class="avatar">
        <img src="../assets/chuahe.jpg" alt="">
      </div>
      <p class="username">Admin</p>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>
      Copyright by @TruongKhanhLinh
    </p>
  </footer>
</template>
<script setup>
import router from '@/router';
const handleClickAccount = () => {
  router.push('account')
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: #ddd;
  align-items: center;
  padding: 5px 20px;
  position: sticky;
  top: 0;
}

.logo a {
  color: black;
}

.logo a:active {
  color: black;
}

.logo h2,
img {
  display: inline;
}

.logo img {
  height: 30px;
}

.account {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar a {
  color: black;
  font-size: 18px;
}

.navbar a:hover {
  color: red;
}

.navbar__menu {
  margin-right: 20px;
}

.avatar img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

main {
  margin-inline: 150px;
  min-height: 100vh;
}

footer {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  color: white;
  background: #1b1b1b;
}
</style>
