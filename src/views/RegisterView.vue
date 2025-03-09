<template>
  <div ref="alert" class="login-success">Đăng ký thành công</div>
  <div class="container">
    <div class="wraper">
      <div class="header">
        <h1>Đăng ký tài khoản</h1>
      </div>
      <div class="body">
        <table>
          <tbody>
            <tr>
              <td>Tài khoản</td>
              <td>
                <input @keyup.enter="phoneRef.focus()" @change="handleDisableButtonSubmit" type="text"
                  v-model.lazy.trim="username" placeholder="username">
              </td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td>
                <input @keyup.enter="emailRef.focus()" @input="handleInputPhone" type="text" v-model.trim="phone"
                  placeholder="phone" ref="phoneRef">
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input @keyup.enter="firstNameRef.focus()" @change="handleChangeEmail" type="email"
                  v-model.lazy.trim="email" placeholder="email" ref="emailRef">
              </td>
            </tr>
            <tr>
              <td>Họ</td>
              <td>
                <input @keyup.enter="lastNameRef.focus()" @change="handleDisableButtonSubmit" type="text"
                  v-model.lazy.trim="firstName" placeholder="first name" ref="firstNameRef">
              </td>
            </tr>
            <tr>
              <td>Tên</td>
              <td>
                <input @keyup.enter="passwordRef.focus()" @change="handleDisableButtonSubmit" type="text"
                  v-model.lazy.trim="lastName" placeholder="last name" ref="lastNameRef">
              </td>
            </tr>
            <tr>
              <td>Mật khẩu</td>
              <td>
                <input @keyup.enter="confirmPasswordRef.focus()" @change="handleDisableButtonSubmit" type="password"
                  v-model.lazy.trim="password" placeholder="password" ref="passwordRef">
              </td>
            </tr>
            <tr>
              <td>Nhập lại mật khẩu</td>
              <td>
                <input @keyup.enter="handleSubmit" @change="checkConfirmPassword" type="password"
                  v-model.lazy.trim="confirmPassword" placeholder="password" ref="confirmPasswordRef">
              </td>
            </tr>
          </tbody>
        </table>
        <p v-show="hasError" class="fail-credentials"> Thông tin không hợp lệ
        </p>
        <p v-show="emailInvalid" class="fail-credentials"> Email không hợp lệ
        </p>
        <p v-show="confirmPasswordInvalid" class="fail-credentials"> Mật khẩu phải khớp nhau
        </p>
      </div>
      <div class="footer">
        <button :disabled="inputInvalid == true ? true : false" @click="handleRegister">Đăng ký</button>
      </div>
      <a href="/login">Bạn đã có tài khoản? Đăng nhập</a>
    </div>
  </div>
</template>

<script setup>
import { login, register } from '@/service/accountService';
import { ref, watchEffect } from 'vue';
import router from '@/router';

const email = ref('')
const firstName = ref('')
const lastName = ref('')
const username = ref('')
const password = ref('')
const phone = ref('')
const confirmPassword = ref('')

const hasError = ref(false)
const inputInvalid = ref(true)
const emailInvalid = ref(false)
const confirmPasswordInvalid = ref(false)

const alert = ref(null)

const passwordRef = ref(null)
const emailRef = ref(null)
const firstNameRef = ref(null)
const lastNameRef = ref(null)
const confirmPasswordRef = ref(null)
const phoneRef = ref(null)

const showAlert = () => {
  alert.value.classList.add('show'); // Thêm class để kích hoạt hiệu ứng
  setTimeout(() => {
    alert.value.classList.remove('show');
  }, 1500);
};
const handleRegister = async () => {
  const data = {
    'username': username.value,
    'password': password.value,
    'email': email.value,
    'first_name': firstName.value,
    'last_name': lastName.value,
    'phone': phone.value
  }
  const registerSuccess = await register(data)
  username.value = ''
  password.value = ''
  firstName.value = ''
  lastName.value = ''
  confirmPassword.value = ''
  email.value = ''
  phone.value = ''
  if (registerSuccess) {
    hasError.value = false
    showAlert()
    setTimeout(() => {
      router.push('login')
    }, 1500);
  }
  else {
    hasError.value = true
  }
}
const validateEmail = () => {
  const val = email.value
  let c1 = false
  let c2 = false
  for (let i = 0; i < val.length; i++) {
    if (val[i] == '@' && i > 0 && c2 == false) {
      c1 = true
    }
    if (val[i] == '.' && i > 0 && c1 == true) {
      c2 = true
    }
  }

  return c1 && c2
}
const handleChangeEmail = () => {
  // validate sẽ trả về email có hợp lệ hay không: hợp lệ = true
  emailInvalid.value = !validateEmail()
}
const handleDisableButtonSubmit = () => {
  hasError.value = false
  inputInvalid.value = (
    username.value == '' ||
    email.value == '' ||
    firstName.value == '' ||
    lastName.value == '' ||
    password.value == '' ||
    confirmPassword.value == '' ||
    phone.value == '' ||
    emailInvalid.value ||
    confirmPasswordInvalid.value
  )
  return inputInvalid.value
}
const handleInputPhone = () => {
  if (isNaN(Number(phone.value))) {
    phone.value = phone.value.slice(0, phone.value.length - 1)
  }
  handleDisableButtonSubmit()
}
const checkConfirmPassword = () => {
  if (password.value == confirmPassword.value)
    confirmPasswordInvalid.value = false
  else
    confirmPasswordInvalid.value = true
  handleDisableButtonSubmit()
}
const handleSubmit = (e) => {
  handleRegister()
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
