<template>
  <div class="container h-full flex flex-col justify-between items-stretch gap-16 xl:flex-row xl:gap-5">
    <div class="order my-5 h-full flex-2/3">
      <div class="order__header flex justify-between items-start">
        <div @click="showFormCreate = !showFormCreate" class="btn btn-lg relative group">
          Thêm đơn <span
            class="plus absolute right-0 group-hover:right-4 transition-all duration-300 text-white">+</span>
        </div>
        <form class="search">
          <input type="search" class="border-2 border-gray-400 px-2 py-2 rounded-lg focus:outline-none"
            placeholder="Search">
        </form>
      </div>
      <OrderCreate :showFormCreate="showFormCreate" @close-form-create="showFormCreate = false" />
      <div class="order__body mt-4 h-11/12">
        <OrderTable />
      </div>
    </div>
    <HistoryEditOrder />
  </div>
</template>

<script setup>
import router from '@/router';
import OrderTable from './OrderTable.vue';
import OrderCreate from './OrderCreate.vue';
import { ref } from 'vue';
import HistoryEditOrder from './HistoryEditOrder.vue';
const showFormCreate = ref(false)
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
