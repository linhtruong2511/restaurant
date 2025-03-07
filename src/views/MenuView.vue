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
  padding: 10px;
  margin-right: 50px;
  min-width: 150px;
}

li {
  font-size: 20px;
  margin-bottom: 20px;
  width: 100%;
}

li a {
  color: black;
  cursor: pointer;
}

li a:hover {
  color: orange;
}

.active {
  color: orange;
}

.container {
  display: flex;
  align-items: start;
  margin-top: 30px;
}

.item img {
  width: 310px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
}

.item p {
  text-align: center;
}

.item .name {
  font-size: 20px;
}

.item .price {
  color: gray;
}

.menu_item {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
