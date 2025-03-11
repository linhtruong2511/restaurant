<template>
  <div class="edit-order-page">
    <h2>Chỉnh sửa đơn hàng #{{ order.id }}</h2>
    <div>
      <form @submit.prevent="saveOrder">
        <div class="form-group">
          <label for="customer">ID Khách hàng:</label>
          <input type="text" id="customer" v-model="order.customer" />
        </div>
        <div class="form-group">
          <label for="order_date">Thời gian đặt bàn:</label>
          <input type="datetime-local" id="order_date" v-model="order.order_date" />
        </div>
        <div class="form-group">
          <label>Mang về:</label>
          <input type="checkbox" id="take_away" v-model="order.take_away" />
        </div>
        <div class="form-group">
          <label for="status">Trạng thái:</label>
          <select id="status" v-model="order.status">
            <option value="pending">Pending</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">Lưu</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const order = {
  id: 1,
  customer: 'truong khanh linh',
  order_date: '2025-3-11',
  take_away: true,
  status: 'pending'
}
</script>
<style scoped>
.edit-order-page {
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input[type="text"],
input[type="datetime-local"],
select {
  width: calc(100% - 18px);
  /* Trừ padding và border */
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

input[type="checkbox"] {
  margin-top: 5px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 20px auto 0;
}

button:hover {
  background-color: #0056b3;
}
</style>
