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
    <div class="menu__body h-9/12">
      <MenuTable />
    </div>
  </div>
</template>

<script setup>
import SearchInput from '@/components/common/SearchInput.vue';
import MenuTable from './MenuTable.vue';
import { ref } from 'vue';
import MenuCreate from './MenuCreate.vue';
import ToolBar from '@/components/common/ToolBar.vue';
const isShowDropdown = ref(false)
const isShowFormCreate = ref(false)
const handleShowFormCreate = () => {
  isShowFormCreate.value = !isShowFormCreate.value
}
</script>

<style scoped></style>
