<template>
  <div class="logo my-7">
    <img class="h-12 w-12 mx-auto" src="../../assets/logo.png" alt="">
  </div>

  <ul class="nav">
    <router-link to="admin/dashbroad">
      <li class="nav__item">Trang chủ</li>
    </router-link>
    <li class="nav__item">Đặt bàn</li>
    <li class="nav__item">Nhân viên</li>
    <li class="nav__item">Menu</li>
    <li class="nav__item">Hóa đơn</li>
    <li class="nav__item">Nguyên liệu</li>
  </ul>

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
