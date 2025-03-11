<template>
  <div class="order-page">
    <div class="head">
      <h2>Danh sách order của khách</h2>
    </div>
    <div class="body">
      <div class="orders">
        List order
      </div>
      <div class="support">
        support
      </div>
    </div>
  </div>
</template>

<script setup>
import orderService from '@/service/orderService';
import { onMounted } from 'vue';

onMounted(() => {
  const r = orderService.getOrders()
  console.log(r)
})
</script>

<style scoped></style>
