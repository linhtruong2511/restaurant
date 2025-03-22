<template>
  <div class="navbar flex-1/12 inline-block w-40 h-full bg-gray-200">
    <div class="logo my-7">
      <router-link to="/">
        <img class="h-12 w-12 mx-auto" src="../../assets/logo.png" alt="">
      </router-link>
    </div>
    <ul class="nav">
      <router-link to="/admin">
        <li class="nav__item">Trang chủ</li>
      </router-link>
      <router-link to="/admin/order">
        <li class="nav__item">Đặt bàn</li>
      </router-link>
      <router-link to="/admin/employee">
        <li class="nav__item">Nhân viên</li>
      </router-link>
      <li class="nav__item">Menu</li>
      <li class="nav__item">Hóa đơn</li>
      <li class="nav__item">Nguyên liệu</li>
    </ul>
  </div>

</template>

<script setup>

</script>

<style scoped>
.nav__item {
  padding: 20px;
  text-align: center;
  border-top: 1px solid #f9fafb;
  border-bottom: 1px solid #f9fafb;
  cursor: pointer;
}

.nav__item:hover {
  background-color: #d1d5dc;
}
</style>
