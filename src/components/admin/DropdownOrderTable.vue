<template>
  <div :class="{ show: props.showDropdown, dropdown: true }">
    <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
      <ul class="py-2 text-sm text-gray-700">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Thông tin chi tiết</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Sửa</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Sign
            out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showDropdown: Boolean
})
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 30px;
  top: 40px;
  max-height: 0;
  transition: all 500ms ease-in-out;
  display: none;
}

.show {
  max-height: 500px;
  display: block;
}
</style>
