<template>
  <div class="container">
    <div class="header">
      <h1>Đăng nhập tài khoản</h1>
    </div>
    <div class="body">
      <table>
        <tbody>
          <tr>
            <td>Tài khoản</td>
            <td>
              <input type="text" v-model.lazy="username">
            </td>
          </tr>
          <tr>
            <td>Mật khẩu</td>
            <td>
              <input type="text" v-model.lazy="password">
            </td>
          </tr>
        </tbody>
      </table>
      <a href="#">Quên mật khẩu</a>
    </div>
    <div class="footer">
      <button @click="handleLogin">Đăng nhập</button>
    </div>
    <a href="#">Chưa có tài khoản? Đăng ký</a>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const username = ref()
const password = ref()

const handleLogin = () => {

}

</script>

<style scoped></style>