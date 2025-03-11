<template>
  <h3 class="tool-title">Công cụ</h3>
  <div class="filter-options">
    <select v-model="filterStatus">
      <option value="">Tất cả trạng thái</option>
      <option value="pending">Pending</option>
      <option value="inprogress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
    <input type="text" v-model="searchKeyword" placeholder="Tìm theo ID, Khách hàng..." />
  </div>
  <button class="apply-filters">Áp dụng</button>
</template>

<script setup>
import { ref } from 'vue';

const filterStatus = ref('')
const searchKeyword = ref('')
</script>

<style scoped>
.tool {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
}

.tool-title {
  margin-bottom: 20px;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-options select,
.filter-options input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.apply-filters {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.apply-filters:hover {
  background-color: #0056b3;
}
</style>
