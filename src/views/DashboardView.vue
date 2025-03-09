<template>
  <div class="dashbroad">
    <nav class="navbar">
      <RouterLink to="/">
        <div class="logo">
          <img src="../assets/logo.svg" alt="">
        </div>
      </RouterLink>
      <ul>
        <RouterLink to="/profile">
          <li>
            Tài khoản
          </li>
        </RouterLink>
        <RouterLink to="/profile/order">
          <li>
            Đơn hàng
          </li>
        </RouterLink>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>

</script>

<style scoped>
.dashbroad {
  display: flex;
  align-items: start;
}

.navbar {
  background-color: #ddd;
  position: absolute;
  height: 100%;
  width: 150px;
  text-align: center;
}

.navbar li {
  padding: 10px 5px;
}

.navbar li:hover {
  background-color: rgb(146, 245, 146);
}

.logo img {
  height: 50px;
  width: 50px;
}

.logo {
  margin-top: 20px;
}
</style>
