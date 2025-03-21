<template>
  <div :class="{ sticky: setting.headerSticky, 'admin-header': true }">
    <div class="flex items-center justify-end gap-5 pt-3 px-7 pb-5 mb-8 shadow-lg">
      <i class="notification text-blue-500 fa-solid fa-envelope"></i>
      <div class="user-info flex flex-col items-center">
        <img class="avatar rounded-full w-10 h-10" src="../../assets/user.png" alt="">
        <p class="username">admin</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingAdmin } from '@/stores/settingAdmin';

const setting = useSettingAdmin()
</script>

<style scoped>
.admin-header {
  top: 0;
  z-index: 10;
  background-color: white;
}
</style>
