<template>
  <div :class="{ 'order-create': true, 'show': isShowFormCreate }">
    <form class="grid" @submit.prevent="submit">
      <div>
        <label class="block my-2 font-medium text-gray-900" for="name">Tên</label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text" id="name" required>
      </div>
      <div>
        <label class="block my-2 font-medium text-gray-900" for="price">Giá</label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="number" name="price" required>
      </div>
      <div>
        <label for="ordered" class="block my-2 font-medium text-gray-900 ">Loại</label>
        <select id="ordered"
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option value="mon le">Món lẻ</option>
          <option value="combo">Combo</option>
          <option value="nuoc">Nước</option>
          <option value="ruou">Rượu</option>
        </select>
      </div>
      <div>
        <label class="block my-2 font-medium text-gray-900">Chú thích</label>
        <textarea
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"></textarea>
      </div>
      <div class="text-right">
        <button type="submit" @click="clickCreate" class="btn mt-5">Thêm</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
const props = defineProps({
  isShowFormCreate: Boolean
})
const emit = defineEmits(['closeFormCreate'])
const submit = (e) => {
  console.log('data: ', e.target[0].value, e.target[1].value, e.target[2].value)
  const data = {
    id: 2,
    name: e.target[0].value,
    type: e.target[2].value,
    price: e.target[1].value,
    status: 'Pending',
    note: e.target[3].value,
  }
  menuStore.data.push(data);
  emit('closeFormCreate')
}
</script>

<style scoped>
input {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.order-create {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 500ms ease;
}

.show {
  max-height: 500px;
  opacity: 1;
}
</style>
