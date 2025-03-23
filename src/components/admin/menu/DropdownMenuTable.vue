<template>
  <i @click="handleShowDropdown"
    class="fa-solid fa-ellipsis-vertical font-medium cursor-pointer text-blue-600 dark:text-blue-500">
  </i>
  <transition class="overflow-clip">
    <div v-if="isShowDropdown" @click="handleShowDropdown" class="dropdown shadow-lg bg-white z-10">
      <div id="dropdown" class="z-10  divide-y rounded-lg w-44 overflow-clip bg-white divide-gray-100">
        <ul class="py-2 text-sm text-gray-700">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Thông tin chi tiết</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Sửa</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Xóa</a>
          </li>
        </ul>
      </div>
    </div>
  </transition>

</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
const isShowDropdown = ref(false);
const handleShowDropdown = () => {
  isShowDropdown.value = !isShowDropdown.value;
}
const handleKeyUpESC = (e) => {
  isShowDropdown.value = false;
}
onMounted(() => {
  document.addEventListener('keyup', handleKeyUpESC);
})
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyUpESC);
})
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 30px;
  top: 50px;
}

.v-enter-active,
.v-leave-active {
  transition: max-height 0.3s ease-in, opacity 0.4s ease-in;
}

.v-enter-from,
.v-leave-to {
  max-height: 0;
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
