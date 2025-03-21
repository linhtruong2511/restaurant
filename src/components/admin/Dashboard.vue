<template>
  <div>
    <div class="header mb-8 flex justify-between">
      <h1 class="text-3xl font-semibold text-red-500">Bảng điều khiển chính</h1>
      <button class="border p-2 rounded-md transition active:bg-blue-200"
        @click="setting.headerSticky = !setting.headerSticky">Header fixed</button>
    </div>
    <section class="flex justify-between gap-8 items-stretch flex-col lg:flex-row">
      <DateLine />
      <Personnel />
    </section>
    <section class="flex justify-between gap-8 items-stretch my-16 ">
      <ChatBox />
      <CommonInformation />
    </section>
  </div>
</template>

<script setup>
import DateLine from '@/components/admin/DateLine.vue';
import Personnel from '@/components/admin/Personnel.vue'
import ChatBox from './ChatBox.vue';
import CommonInformation from './CommonInformation.vue';
import { useSettingAdmin } from '@/stores/settingAdmin';
const setting = useSettingAdmin()
</script>

<style scoped>
section {
  height: 500px;
}

@media (width <=64rem) {
  section {
    height: auto;
  }
}
</style>
