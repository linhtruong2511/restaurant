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
    <div v-if="showDropdownAccountButton" class="overlay" @click="showDropdownAccountButton = false">
      <ul v-show="showDropdownAccountButton" class="dropdown-account">
        <li @click="router.push('profile')">Thông tin tài khoản</li>
        <li @click="handleLogout">Đăng xuất</li>
      </ul>
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
import { getInfoUser } from '@/service/accountService';
import { setCookie } from '@/service/utils';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const userStore = useUserStore()
const username = ref(null)
const hasAvatar = ref(false)
const userImage = ref(null)
const showDropdownAccountButton = ref(false)
const isLogged = ref(false)
const router = useRouter()
const route = useRoute()
const handleClickAccount = () => {
  if (isLogged.value) {
    showDropdownAccountButton.value = !showDropdownAccountButton.value
  }
  else {
    router.push('login')
  }
}
const initAccount = () => {
  const info = userStore.info
  if (info) {
    isLogged.value = true
    username.value.textContent = userStore.info['username']
    if (userStore.info['avatar'] != null) {
      userImage.value.src = userStore.info['avatar']
    }
  }
}
const handleLogout = () => {
  setCookie('token', '', null)
  window.location.reload()
}
onMounted(async () => {
  await getInfoUser()
  initAccount()
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
  object-fit: cover;
  overflow: hidden;
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.dropdown-account {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  right: 0;
  top: 60px;
}

.dropdown-account li {
  padding: 8px 5px;
}

.dropdown-account li:hover {
  background-color: rgb(158, 231, 158);
}
</style>
