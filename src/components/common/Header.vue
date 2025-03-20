<template>
  <header class="text-center opacity-70 border-b border-gray-50 flex flex-col items-center bg-black fixed w-full z-10">
    <div class="container shadow-2xl text-white flex items-center justify-between p-5">
      <div class="logo">
        <RouterLink to="/">
          <div class="wrapper flex items-center">
            <img class="h-16 w-16" src="../assets/logo.png" alt="Logo">
            <h2 class="text-3xl font-bold text-red-500">PHO HANOI</h2>
          </div>
        </RouterLink>
      </div>
      <div class="navbar flex items-center gap-7">
        <RouterLink to="/menu" class="navbar__item hover:text-red-700 transition-colors duration-300">Home</RouterLink>
        <RouterLink to="/booking" class="navbar__item hover:text-red-700 transition-colors duration-300">About
        </RouterLink>
        <RouterLink to="/booking" class="navbar__item hover:text-red-700 transition-colors duration-300">Menu
        </RouterLink>
        <RouterLink to="/booking" class="navbar__item hover:text-red-700 transition-colors duration-300">Service
        </RouterLink>
        <RouterLink to="/booking" class="navbar__item hover:text-red-700 transition-colors duration-300">Gallery
        </RouterLink>
        <RouterLink to="/booking" class="navbar__item hover:text-red-700 transition-colors duration-300">Blog
        </RouterLink>
        <RouterLink to="/booking" class="navbar__item hover:text-red-700 transition-colors duration-300">Contact
        </RouterLink>
      </div>
    </div>
  </header>
  <div>
    <img class="banner w-screen h-screen object-cover" src="../assets/home-1.jpg" alt="">
    <div class="overlay bg-black opacity-30 absolute top-0 left-0 w-full h-full "></div>
  </div>
</template>

<script setup>
import { loadUser } from '@/service/accountService';
import { setCookie } from '@/service/utils';
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const cartStore = useCartStore()
const username = ref(null);
const userImage = ref(null);
const showDropdownAccountButton = ref(false);
const router = useRouter();

const clickAccount = () => {
  if (userStore.active) {
    showDropdownAccountButton.value = !showDropdownAccountButton.value;
  } else {
    router.push('login');
  }
};

const showAccount = () => {
  if (userStore.active) {
    userStore.active = true
    username.value.textContent = userStore.info['username'];
    console.log('avatar: ', userStore.info['avatar']);
    if (userStore.info['avatar'] != null) {
      userImage.value.src = userStore.info['avatar'];
    }
  }
};

const logout = () => {
  setCookie('token', '', null);
  window.location.reload();
};
const linkToBookingPage = () => {
  router.push('booking')
}
onMounted(async () => {
  await loadUser();
  showAccount();
});
</script>

<style scoped></style>
