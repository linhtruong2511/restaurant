<template>
  <div>
    <div class="header mb-8">
      <h1 class="text-3xl font-semibold text-red-500">Bảng điều khiển chính</h1>
    </div>
    <section class="flex justify-between gap-8 items-stretch" style="height: 500px;">
      <DateLine />
      <Personnel />
    </section>
  </div>
</template>

<script setup>
import DateLine from '@/components/admin/DateLine.vue';
import Personnel from '@/components/admin/Personnel.vue'
</script>

<style scoped></style>
