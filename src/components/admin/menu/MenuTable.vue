<template>
  <div
    class="menu-table overflow-x-auto h-full shadow-md sm:rounded-lg p-5 flex flex-col justify-between max-h-[500px]">
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
            ID
          </th>
          <th scope="col" class="px-6 py-3">
            Tên
          </th>
          <th scope="col" class="px-6 py-3">
            Loại
          </th>
          <th scope="col" class="px-6 py-3">
            Giá
          </th>
          <th scope="col" class="px-6 py-3">
            Trạng thái
          </th>
          <th scope="col" class="px-6 py-3">
            Ghi chú
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in menuStore.data" :key="index"
          class="bg-white border-b border-gray-200 hover:bg-gray-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ item.id }}
          </th>
          <td class="px-6 py-4">
            {{ item.name }}
          </td>
          <td class="px-6 py-4">
            {{ item.type }}
          </td>
          <td class="px-6 py-4">
            {{ item.price }}
          </td>
          <td class="px-6 py-4">
            {{ item.status }}
          </td>
          <td class="px-6 py-4">
            {{ item.note }}
          </td>
          <td id="edit" class="px-6 py-4 text-center relative">
            <DropdownMenuTable />
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4">
      <span
        class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing
        <span class="font-semibold text-gray-900 ">1-10</span> of <span
          class="font-semibold text-gray-900 ">1000</span></span>
      <Pagination />
    </nav>
  </div>
</template>

<script setup>
import Pagination from '@/components/common/Pagination.vue';
import { useMenuStore } from '@/stores/menu';
import { ref } from 'vue';
import DropdownMenuTable from './DropdownMenuTable.vue';
const menuStore = useMenuStore();

</script>

<style lang="scss" scoped></style>
