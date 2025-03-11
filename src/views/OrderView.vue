<template>
  <div class="order-page">
    <header class="header">
      <div class="header-content">
        <h1>Danh sách order của khách</h1>
        <div class="header-actions">
          <button class="add-order-btn">Thêm đơn hàng</button>
          <input type="text" placeholder="Tìm kiếm đơn hàng..." class="search-input">
        </div>
      </div>
    </header>
    <div class="body">
      <div class="orders">
        <OrderTable />
      </div>
      <div class="tool">
        <ToolOrder />
      </div>
    </div>
  </div>
</template>

<script setup>
import OrderTable from '@/components/OrderTable.vue';
import ToolOrder from '@/components/ToolOrder.vue';
import orderService from '@/service/orderService';
import { useOrderStore } from '@/stores/order';
import { onMounted, ref, watch } from 'vue';

const orderStore = useOrderStore();

onMounted(() => {
  orderService.getOrders();
});

</script>

<style scoped>
.order-page {
  padding: 20px;
  font-family: sans-serif;
}

.header {
  background-color: #007bff;
  color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.add-order-btn,
.search-input {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
}

.add-order-btn {
  background-color: white;
  color: #007bff;
  cursor: pointer;
}

.search-input {
  border: 1px solid #ddd;
}

.body {
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  gap: 20px;
}

.orders {
  background-color: #fff;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
