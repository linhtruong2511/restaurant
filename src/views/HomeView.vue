<template>
  <div class="banner">
    <img src="../assets/banner.png" alt="">
  </div>
  <div class="main">
    <div class="content">
      <h2 class="content__title">Quán Thịt Nướng Hàn Quốc</h2>
      <p class="content__body">GoGo House – Quán thịt nướng Hàn Quốc Ngon Số 1 sẽ đưa bạn ghé đến những quán thịt nướng
        tại thành
        phố Seoul đã tạo nên danh tiếng cho nền ẩm thực xứ kim chi. Nếu đã một lần thưởng thức thịt nướng tại GoGi
        House, bạn sẽ không thể quên được hương vị “ngất ngây” của những món sườn non bò Mỹ, nạc vai bò Mỹ, dẻ sườn
        tươi…. khi hòa quyện vào với các loại gia vị đặc trưng xứ Hàn đã trở nên hấp dẫn đến thế nào. Ngoài ra, những
        món ăn kèm không thể bỏ qua như cơm trộn, mỳ lạnh, canh Kimchi và các loại lẩu cũng sẽ làm bạn ấn tượng thêm về
        nền ẩm thực Hàn Quốc.</p>
    </div>
    <div class="image">
      <img src="../assets/home-image-1.jpg" alt="">
      <img src="../assets/home-image-2.jpg" alt="">
    </div>
  </div>
  <div class="link-to-menu">
    <RouterLink class="link-btn" to="menu">Xem thực đơn</RouterLink>
  </div>
</template>
<script setup>

</script>

<style scoped>
.banner {
  position: relative;
}

.banner img {
  width: 100%;
  display: block;
}

.banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  /* Overlay mờ */
}

.main {
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.content {
  flex: 1;
  padding-right: 30px;
  width: calc(50% - 30px);
}

.content__title {
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.content__body {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.image {
  display: flex;
  gap: 20px;
  width: calc(50% - 30px);
}

.image img {
  width: calc(50% - 10px);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image img:hover {
  transform: scale(1.05);
}

a {
  display: inline-block;
  background-color: #ff6600;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  margin: 30px auto;
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #e65c00;
}

@media (max-width: 1100px) {
  .image {
    flex-direction: column;
  }

  .image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
    /* Thay đổi hướng flex */
  }

  .image {
    align-items: center;
    margin-top: 30px;
  }

  .content {
    display: block;
    text-align: center;
    width: 90%;
    gap: 20px;
  }

  .image {
    flex-direction: row;
    width: 95%;
  }

  .link-to-menu {
    text-align: center;
  }
}

/* Media query cho màn hình nhỏ hơn nữa (ví dụ: điện thoại) */
@media (max-width: 480px) {
  .content {
    display: block;
    text-align: center;
  }

  .content__title {
    font-size: 24px;
    /* Giảm kích thước chữ */
  }

  .image {
    display: none;
    /* Hình ảnh chiếm toàn bộ chiều rộng */
  }



}
</style>
