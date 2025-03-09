<template>
  <header>
    <div class="logo">
      <RouterLink to="/">
        <img src="../assets/logo.svg" alt="">
        <h2>GOGO</h2>
      </RouterLink>
    </div>
    <div class="navbar">
      <RouterLink to="/menu" class="navbar__menu">Thực đơn</RouterLink>
      <RouterLink to="/order" class="navbar__order">Đặt bàn</RouterLink>
      <RouterLink v-if="userStore.info && (userStore.info['is_staff'] || userStore.info['is_superuser'])" to="/order"
        class="navbar__order">
        Order khách</RouterLink>
    </div>
    <div @click="handleClickAccount" class="account">
      <div class="avatar">
        <img ref="userImage" src="../assets/user.png" alt="">
      </div>
      <p ref="username" class="username"></p>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>
      Copyright @ 2025 LinhTruong
    </p>
  </footer>
</template>
<script setup>
import router from '@/router';
import { getInfoUser } from '@/service/accountService';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
const userStore = useUserStore()
const username = ref(null)
const hasAvatar = ref(false)
const userImage = ref(null)
const handleClickAccount = () => {
  router.push('login')
}
onMounted(async () => {
  await getInfoUser()
  const info = userStore.info
  if (info) {
    username.value.textContent = userStore.info['username']
    if (userStore.info['avatar'] != null) {
      userImage.value.src = userStore.info['avatar']
    }
  }
})

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: #ddd;
  align-items: center;
  padding: 5px 20px;
  position: sticky;
  top: 0;
  min-height: 66px;
}

.logo a {
  color: black;
}

.logo a:active {
  color: black;
}

.logo h2,
img {
  display: inline;
}

.logo img {
  height: 30px;
}

.account {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar a {
  color: black;
  font-size: 18px;
  margin-right: 20px;
}

.navbar a:hover {
  color: red;
}

.avatar img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

main {
  margin-inline: 150px;
  min-height: 100vh;
}

footer {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  color: white;
  background: #1b1b1b;
}
</style>
