<template>
  <div class="admin flex h-screen justify-stretch">
    <AdminNavBar />
    <div class="main flex-10/12 overflow-auto">
      <AdminHeader />
      <div class="body px-10 h-9/12">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminHeader from '@/components/admin/AdminHeader.vue';
import AdminNavBar from '@/components/admin/AdminNavBar.vue';


</script>

<style scoped></style>
