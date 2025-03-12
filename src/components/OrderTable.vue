<template>
  <table>
    <thead>
      <tr>
        <th>Đơn</th>
        <th>ID khách</th>
        <th>Thời gian đặt bàn</th>
        <th>Mang về</th>
        <th>Trạng thái</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orderStore.orders" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.customer }}</td>
        <td>{{ item.order_date }}</td>
        <td>
          <input type="checkbox" :checked="item.take_away" disabled>
        </td>
        <td>
          <span :class="['status', item.status.toLowerCase()]">
            {{ item.status }}
          </span>
        </td>
        <td class="btns">
          <button @click="linkToEdit(item.id)" class="btn edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
          <button @click="clickConfirm(item.id)" class="btn confirm-btn"><i class="fa-solid fa-check"></i></button>
          <button @click="showBill(item.id)" v-show="item.status === 'Progressing'" class="btn bill-btn"><i
              class="fa-solid fa-file-lines"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="pagination">
    <button @click="offset -= 5" :disabled="offset === 0 ? true : false">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <!-- <span v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="changePage(page)">
      {{ page }}
    </span> -->
    <button @click="offset += 5">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import router from '@/router';
import billingService from '@/service/billingService';
import orderService from '@/service/orderService';
import { useOrderStore } from '@/stores/order';
import { ref, watch, watchEffect } from 'vue';

const orderStore = useOrderStore()
const offset = ref(0)
const linkToEdit = (id) => {
  router.push({ name: 'edit-order', params: { id: id } })
}
const clickConfirm = (id) => {
  const check = confirm('Xác nhận đơn')
  if (check) {
    billingService.confirm(id)
    // sau khi xác nhận đơn hàng được đặt thành công thì sẽ gửi email cho khách hàng
  }
}
watchEffect(() => {
  orderService.getOrders(offset.value)
  // console.log('order: ', orderStore.orders)
})
const showBill = (id) => {
  router.push({ name: 'bill', params: { id: id } })
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  /* Gộp đường viền */
  font-family: sans-serif;
}

th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 200px;
}

thead {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

.btns {
  display: flex;
  gap: 10px;
}

.btn {
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn {
  background-color: #fadf47;
}

.edit-btn:hover {
  background-color: #ffdc2e;
}

.confirm-btn {
  background-color: #28a745;
}

.confirm-btn:hover {
  background-color: #12ad36;
}

.bill-btn {
  background-color: #9b9b9b;
}

.bill-btn:hover {
  background-color: #757474;
}


input[type="checkbox"] {
  cursor: default;
}

.status {
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
}

.pending {
  background-color: #ffc107;
  /* Màu vàng cho pending */
}

.progressing {
  background-color: #007bff;
  /* Màu xanh dương cho inprogress */
}

.complete {
  background-color: #28a745;
  /* Màu xanh lá cây cho completed */
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button,
.pagination span {
  padding: 8px 12px;
  margin: 0 5px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: default;
}

.pagination span.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
