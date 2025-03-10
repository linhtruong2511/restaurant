<template>
  <div class="container">
    <ul class="navbar">
      <li>
        <a :class="{ active: actived === 'appetizer' }" @click="handleClickCategory('appetizer')">
          Khai vị, ăn kèm
        </a>
      </li>
      <li>
        <a :class="{ active: actived === 'dessert' }" @click="handleClickCategory('dessert')">
          Tráng miệng
        </a>
      </li>
      <li>
        <a :class="{ active: actived === 'hotpot' }" @click="handleClickCategory('hotpot')">
          Lẩu
        </a>
      </li>
    </ul>
    <div class="menu_item">
      <div v-for="(item, index) in menuItem" :key="index" class="item">
        <img :src="item.image" alt="">
        <p class="name">{{ item.name }}</p>
        <p class="price">{{ item.price }}.000 đ</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAllCategory, getItems } from '@/service/categoryService';
import { onMounted, ref } from 'vue';
import route from '@/router';

const actived = ref('appetizer')
const menuItem = ref([])
const handleClickCategory = async (category) => {
  actived.value = category
  const data = await getItems(category, 0)
  menuItem.value = data.results
}
onMounted(async () => {
  const data = await getItems('appetizer', 0)
  menuItem.value = data.results
})
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 20px;
  margin-right: 30px;
  min-width: 180px;
  position: sticky;
  top: 100px;
  background-color: white;
  /* Thêm background để tránh bị lẫn với nội dung khi scroll */
  border-right: 1px solid #eee;
}

li {
  font-size: 18px;
  margin-bottom: 15px;
  width: 100%;
}

li a {
  color: #333;
  cursor: pointer;
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

li a:hover {
  background-color: #f0f0f0;
  color: #ff6600;
}

.active {
  color: #ff6600;
  font-weight: 600;
}

.container {
  display: grid;
  /* Thay đổi thành grid */
  grid-template-columns: 200px 1fr;
  /* Xác định độ rộng cột */
  gap: 20px;
  margin: 30px;
}

.item {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.item:hover {
  transform: translateY(-5px);
}

.item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  transition: transform 0.3s ease;
}

.item:hover img {
  transform: scale(1.05);
}

.item p {
  text-align: center;
  padding: 10px;
}

.item .name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
}

.item .price {
  color: #888;
  font-size: 14px;
}

.menu_item {
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  /* Thay đổi dòng này */
  gap: 20px;
  padding: 20px;
}
</style>
