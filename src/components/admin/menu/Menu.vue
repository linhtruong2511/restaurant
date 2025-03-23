<template>
  <div class="menu h-[500px]">
    <div class="menu__header flex justify-between">
      <div class="w-max">
        <!-- <ButtonAddAnimation>Tool</ButtonAddAnimation> -->
        <ToolBar @handleShowFormCreate="handleShowFormCreate" />
      </div>
      <SearchInput />
    </div>
    <MenuCreate :isShowFormCreate="isShowFormCreate" @close-form-create="isShowFormCreate = false" />
    <div class="menu__body h-10/12 flex gap-5 mt-5 items-stretch ">
      <MenuTable />
      <FilterMenu />
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/common/SearchInput.vue';
import MenuTable from './MenuTable.vue';
import { ref } from 'vue';
import MenuCreate from './MenuCreate.vue';
import ToolBar from '@/components/common/ToolBar.vue';
import FilterMenu from './FilterMenu.vue';
const isShowDropdown = ref(false)
const isShowFormCreate = ref(false)
const handleShowFormCreate = () => {
  isShowFormCreate.value = !isShowFormCreate.value
}
</script>

<style scoped></style>
