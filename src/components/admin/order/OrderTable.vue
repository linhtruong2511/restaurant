<template>
  <div @click="handleClickTable"
    class="order-table overflow-x-auto h-full shadow-md sm:rounded-lg p-5 flex flex-col justify-between max-h-[500px]">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            Tên khách
          </th>
          <th scope="col" class="px-6 py-3">
            Người tạo
          </th>
          <th scope="col" class="px-6 py-3">
            Thời gian
          </th>
          <th scope="col" class="px-6 py-3">
            Status
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in orderStore.data" :key="index"
          class="bg-white border-b border-gray-200 hover:bg-gray-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ item.name }}
          </th>
          <td class="px-6 py-4">
            {{ item.author }}
          </td>
          <td class="px-6 py-4">
            {{ item.time }}
          </td>
          <td class="px-6 py-4">
            {{ item.status }}
          </td>
          <td id="edit" @click="showDropdown = !showDropdown" class="px-6 py-4 text-center relative">
            <DropdownOrderTable :show-dropdown="showDropdown" />
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
      <span
        class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing
        <span class="font-semibold text-gray-900 ">1-10</span> of <span
          class="font-semibold text-gray-900 ">1000</span></span>
      <Pagination />
    </nav>
  </div>
</template>

<script setup>
import Pagination from '../../common/Pagination.vue';
import { useOrderStore } from '@/stores/order';
import { ref } from 'vue';
import DropdownOrderTable from './DropdownOrderTable.vue';

const orderStore = useOrderStore();
const showDropdown = ref(false)
const handleClickTable = (e) => {
  if (e.target.id != 'dropdown' && showDropdown.value == true && e.target.id != 'edit') {
    showDropdown.value = false
  }
}
</script>

<style scoped></style>
