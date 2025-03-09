<template>
  <div ref="alert" class="login-success">Đăng nhập thành công</div>
  <div class="container">
    <div class="wraper">
      <div class="header">
        <h1>Đăng nhập tài khoản</h1>
      </div>
      <div class="body">
        <table>
          <tbody>
            <tr>
              <td>Tài khoản</td>
              <td>
                <input @keyup.enter="passwordRef.focus()" @change="handleChangeInput" type="text"
                  v-model.lazy.trim="username" placeholder="username">
              </td>
            </tr>
            <tr>
              <td>Mật khẩu</td>
              <td>
                <input @keyup="handleEnterLogin" ref="passwordRef" @change="handleChangeInput" type="password"
                  v-model.lazy.trim="password" placeholder="password">
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="hasError" class="fail-credentials">Tài khoản mật khẩu không chính xác</p>
        <a href="#">Quên mật khẩu</a>
      </div>
      <div class="footer">
        <button :disabled="inputInvalid" @click="handleLogin">Đăng nhập</button>
      </div>
      <a href="register">Chưa có tài khoản? Đăng ký</a>
    </div>
  </div>
</template>

<script setup>
import { login } from '@/service/accountService';
import { ref, watchEffect } from 'vue';
import router from '@/router';
const username = ref()
const password = ref()
const hasError = ref(false)
const inputInvalid = ref(true)
const alert = ref(null)
const passwordRef = ref(null)
const showAlert = () => {
  alert.value.classList.add('show'); // Thêm class để kích hoạt hiệu ứng
  setTimeout(() => {
    alert.value.classList.remove('show'); // Ẩn sau 3 giây
  }, 1500);
};
const handleLogin = async () => {
  const data = {
    'username': username.value,
    'password': password.value
  }
  const loginSuccess = await login(data)
  username.value = ''
  password.value = ''
  inputInvalid.value = true;
  if (loginSuccess) {
    hasError.value = false
    showAlert()
    setTimeout(() => {
      router.push('/')
    }, 1500);
  }
  else {
    hasError.value = true
  }
}
const handleChangeInput = () => {
  hasError.value = false
  inputInvalid.value = !(username.value != '' && password.value != '')
}
const handleEnterLogin = (e) => {
  if (e.key == 'Enter' && !inputInvalid.value) {
    handleLogin()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  height: 100vh;
}

.wraper {
  border: 1px solid #ddd;
  width: 400px;
  margin-inline: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #aaaaaa;
}

.header {
  color: orange;
  margin-bottom: 20px;
  text-align: center;
}

.body table {
  width: 100%;
  padding: 10px 0px;
}

.body input {
  width: 90%;
  padding: 5px;
  font-size: 18px;
  border-radius: 3px;
  border: 1px solid #ddd;
}

.footer {
  margin-top: 20px;
}

.footer button {
  width: 100%;
  padding: 10px;
  transition: all;
  transition-duration: 300ms;
}

.footer button:hover {
  color: white;
  background-color: green;
}

.fail-credentials {
  color: red;
  transition: all;
  transition-duration: 500ms;
}

.login-success {
  padding: 10px;
  background-color: green;
  color: white;
  position: fixed;
  right: -300px;
  /* Bắt đầu ngoài màn hình */
  top: 10px;
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.login-success.show {
  opacity: 1;
  transform: translateX(-310px);
  /* Di chuyển vào màn hình */
}
</style>
