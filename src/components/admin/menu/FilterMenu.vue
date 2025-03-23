<template>
  <div class="filter-menu p-5 bg-white shadow-md rounded-md w-64 grow">
    <h3 class="text-lg font-semibold mb-3">Bộ lọc</h3>

    <!-- Tên món ăn -->
    <div class="mb-3">
      <label class="block text-sm font-medium text-gray-700">Tên món</label>
      <input v-model="filters.name" type="text"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200">
    </div>

    <!-- Loại món ăn -->
    <div class="mb-3">
      <label class="block text-sm font-medium text-gray-700">Loại</label>
      <select v-model="filters.type"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200">
        <option value="">Tất cả</option>
        <option v-for="type in menuTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <!-- Khoảng giá -->
    <div class="mb-3">
      <label class="block text-sm font-medium text-gray-700">Giá (VNĐ)</label>
      <div class="flex space-x-2">
        <input v-model.number="filters.minPrice" type="number" placeholder="Từ"
          class="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200">
        <input v-model.number="filters.maxPrice" type="number" placeholder="Đến"
          class="w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200">
      </div>
    </div>

    <!-- Trạng thái -->
    <div class="mb-3">
      <label class="block text-sm font-medium text-gray-700">Trạng thái</label>
      <select v-model="filters.status"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200">
        <option value="">Tất cả</option>
        <option value="available">Còn hàng</option>
        <option value="out_of_stock">Hết hàng</option>
      </select>
    </div>

    <!-- Nút áp dụng -->
    <button @click="applyFilters" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
      Áp dụng
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const filters = ref({
  name: "",
  type: "",
  minPrice: null,
  maxPrice: null,
  status: "",
});

const menuTypes = ref(["Món chính", "Món phụ", "Đồ uống", "Tráng miệng"]);

const emit = defineEmits(["applyFilter"]);

const applyFilters = () => {
  emit("applyFilter", filters.value);
};
</script>
