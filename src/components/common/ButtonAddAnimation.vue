<template>
  <button class="btn btn-lg relative group">
    <slot></slot> <span
      class="plus absolute right-0 group-hover:right-4 transition-all duration-300 text-white">+</span>
  </button>
</template>

<script setup>
</script>

<style scoped>
.btn {
  padding-left: 30px;
  transition: padding-left 500ms ease, padding-right 500ms ease
}

.btn:hover {
  padding-left: 20px;
  padding-right: 40px;
}
</style>
