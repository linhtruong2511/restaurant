<template>
  <div class="personnel border-2 border-gray-300 shadow-xl overflow-auto rounded-lg flex-1/2 lg:flex-2/3">
    <div class="personnel__header flex justify-between items-center p-4 border-b border-b-gray-300">
      <h3 class="personnel__title text-3xl font-semibold">Nhân sự ngày 20/3</h3>
      <SearchInput />
    </div>
    <div class="personnel__body p-4 relative overflow-x-auto">
      <PersonnelTable />
      <div class="pagination flex justify-center mt-5">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script setup>
import Pagination from '../common/Pagination.vue';
import SearchInput from '../common/SearchInput.vue';
import PersonnelTable from './PersonnelTable.vue';
</script>

<style scoped>
.personnel__table td {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
}


.personnel__table tr:hover {
  background: #e7e6e6;
}
</style>
