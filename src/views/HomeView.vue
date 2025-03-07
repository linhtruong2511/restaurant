<template>
  <div class="banner">
    <img src="../assets/banner.png" alt="">
  </div>
  <div class="main">
    <div class="content">
      <h2 class="content__title">Quán Thịt Nướng Hàn Quốc</h2>
      <p class="content__body">GoGo House – Quán thịt nướng Hàn Quốc Ngon Số 1 sẽ đưa bạn ghé đến những quán thịt nướng tại thành
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
  <RouterLink to="menu">Xem thực đơn</RouterLink>
</template>
<script setup>

</script>

<style scoped>
.banner img {
  width: 100%;
}
.main{
  display: flex;
  align-items: center;
}
.content__title{
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 10px;
}
.image img{
  width: 300px;
}
.image{
  display: flex;
  gap: 20px;
}
</style>
