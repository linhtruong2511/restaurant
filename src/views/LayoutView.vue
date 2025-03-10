<template>
  <Header />
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
import Header from '../components/Header.vue';
</script>

<style scoped>
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

@media (max-width: 768px) {
  main {
    margin-inline: 0px;
  }
}
</style>
