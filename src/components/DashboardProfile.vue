<template>
  <div class="profile">
    <p ref="alertRef" class="alert">Thay đổi ảnh đại diện thành công</p>
    <div v-if="userStore.info" class="container">
      <div class="wrapper">
        <form>
          <div class="avatar">
            <label for="avatar-upload">
              <img v-if="userStore.info.avatar" :src="userStore.info.avatar" alt="Avatar">
              <div v-else class="upload-placeholder">
                <span>Chọn ảnh</span>
              </div>
            </label>
          </div>
          <input id="avatar-upload" type="file" @change="uploadImage">
        </form>
      </div>
      <div class="info">
        <h1 class="title">Thông tin cá nhân</h1>
        <div class="content">
          <p><strong>Tên tài khoản:</strong> {{ userStore.info.username }}</p>
          <p><strong>Email:</strong> {{ userStore.info.email }}</p>
          <p><strong>Số điện thoại:</strong> {{ userStore.info.phone }}</p>
          <p><strong>Họ tên:</strong> {{ userStore.info.first_name }} {{ userStore.info.last_name }}</p>
        </div>
        <button @click="handleShowAlert(false)" class="edit-btn">Chỉnh sửa thông tin</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { onMounted, ref } from 'vue'
import { loadUser, uploadAvatar } from '@/service/accountService'
import { getCookie } from '@/service/utils'

const userStore = useUserStore()
const alertRef = ref(null)

onMounted(async () => {
  loadUser()
})

// Xử lý tải ảnh lên
const uploadImage = async (event) => {
  const file = event.target.files[0]
  if (file) {
    const token = getCookie('token')
    const reader = new FileReader()
    reader.onload = () => {
      userStore.info.avatar = reader.result // Hiển thị ảnh ngay lập tức
    }
    reader.readAsDataURL(file)
    const success = await uploadAvatar(file, userStore.info.id, token)
    console.log(success)
    if (success) handleShowAlert(true)
    else handleShowAlert(false)
  }
}
const handleShowAlert = (isSuccess) => {
  if (isSuccess) {
    alertRef.value.textContent = 'Cập nhật thành công'
    alertRef.value.style.backgroundColor = 'green'
  }
  else {
    alertRef.value.textContent = 'Cập nhật thất bại'
    alertRef.value.style.backgroundColor = 'red'
  }
  alertRef.value.classList.add('show')
  setTimeout(() => {
    alertRef.value.classList.remove('show')
  }, 1500);
}
</script>

<style scoped>
.profile {
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.container {
  border-radius: 10px;
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #333;
}

.avatar {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ddd;
}

label {
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.upload-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: #666;
  font-size: 14px;
}

input[type="file"] {
  display: none;
}

.title {
  margin-bottom: 20px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.edit-btn {
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  transition: background-color 300ms ease-out;
  border: 1px solid #ddd;
  font-size: 14px;
}

.edit-btn:hover {
  color: white;
  background-color: green;
}

.alert {
  position: fixed;
  top: 10px;
  right: -300px;
  border: 1px solid #ddd;
  padding: 10px;
  color: white;
  background-color: green;
  transition: all;
  transition-duration: 300ms;
}

.show {
  transform: translateX(-310px);
}

strong {
  font-weight: 500;
}
</style>
