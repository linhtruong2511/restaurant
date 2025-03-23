<template>
  <div class="toolbar border-gray-100 border rounded-sm shadow">
    <ul class="flex text-sm text-gray-700">
      <li @click="handleShowFormCreate" class="btn">Thêm <i class="fa-solid fa-plus"></i></li>
      <li @click="handleShowFormEdit" class="btn">Sửa <i class="fa-solid fa-pencil"></i></li>
      <li @click="handleDelete" class="btn">Xóa <i class="fa-solid fa-trash"></i></li>
      <li @click="handleShowInfo" class="btn">Xem <i class="fa-solid fa-eye"></i></li>
    </ul>
  </div>
</template>

<script setup>
const emit = defineEmits(['handleShowFormCreate', 'handleShowFormEdit', 'handleDelete', 'handleShowInfo'])
const handleShowFormCreate = () => {
  emit('handleShowFormCreate')
}
const handleShowFormEdit = () => {
  emit('handleShowFormEdit')
}
const handleDelete = () => {
  emit('handleDelete')
}
const handleShowInfo = () => {
  emit('handleShowInfo')
}
</script>

<style scoped>
li {
  border: none;
  border-radius: 0px;
  transition-duration: 300ms;
}

li:hover {
  color: white;
  background: var(--bg-gray);
}
</style>
