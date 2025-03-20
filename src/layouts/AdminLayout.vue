<template>
  <div class="admin flex h-screen">
    <div class="navbar inline-block bg-gray-200 w-40 h-full">
      <AdminNavBar />
    </div>
    <div class="main w-full">
      <div class="head">
        <AdminHeader />
      </div>
      <div class="body px-10">
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
