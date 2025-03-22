<template>
  <div :class="{ 'order-create': true, 'show': showFormCreate }">
    <form class="grid" @submit.prevent="submit">
      <div>
        <label class="block my-2 font-medium text-gray-900" for="name">Tên khách hàng</label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text" id="name">
      </div>
      <div>
        <label class="block my-2 font-medium text-gray-900" for="time">Thời gian</label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="datetime-local" name="time">
      </div>
      <div>
        <label for="ordered" class="block my-2 font-medium text-gray-900 ">Combo</label>
        <select id="ordered"
          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option value="US">Lẩu max</option>
          <option value="CA">Lẩu min</option>
          <option value="FR">Lẩu medium</option>
          <option value="DE">Full stack</option>
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
import { useOrderStore } from '@/stores/order'
const orderStore = useOrderStore()
const props = defineProps({
  showFormCreate: Boolean
})
const emit = defineEmits(['closeFormCreate'])
const submit = (e) => {
  console.log(e)
  console.log('data: ', e.target[0].value, e.target[1].value, e.target[2].value)
  const data = {
    name: e.target[0].value,
    author: 'Trương Khánh Linh',
    time: e.target[1].value.toString(),
    status: 'Pending'
  }
  orderStore.data.push(data);
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
