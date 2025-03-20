<template>
  <div class="personnel border-2 border-gray-300 shadow-xl overflow-auto rounded-lg">
    <div class="personnel__header flex justify-between items-center p-4 border-b border-b-gray-300">
      <h3 class="personnel__title text-3xl font-semibold">Nhân sự ngày 20/3</h3>
      <SearchInput />
    </div>
    <div class="personnel__body p-4 relative overflow-x-auto">
      <table class="personnel__table w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 max-w-10">Tên</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Số điện thoại</th>
            <th scope="col" class="px-6 py-3">Tuổi</th>
            <th scope="col" class="px-6 py-3">Vị trí</th>
            <th scope="col" class="px-6 py-3">Chi nhánh</th>
            <th scope="col" class="px-6 py-3">Trạng thái</th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody class="">
          <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <td class="px-[15px] py-4 max-w-44">Airi Satou Airi Satou Airi Satou</td>
            <td class="px-[15px] py-4">example@gmail.com</td>
            <td class="px-[15px] py-4">01112223334</td>
            <td class="px-[15px] py-4">22</td>
            <td class="px-[15px] py-4">Leader</td>
            <td class="px-[15px] py-4">Hà Nội</td>
            <td class="px-[15px] py-4">Nghỉ ốm</td>
            <td class="px-[15px] py-4"><i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i></td>
          </tr>
          <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <td class="px-[15px] py-4 max-w-44">Airi Satou Airi Satou Airi Satou</td>
            <td class="px-[15px] py-4">example@gmail.com</td>
            <td class="px-[15px] py-4">01112223334</td>
            <td class="px-[15px] py-4">22</td>
            <td class="px-[15px] py-4">Leader</td>
            <td class="px-[15px] py-4">Hà Nội</td>
            <td class="px-[15px] py-4">Nghỉ ốm</td>
            <td class="px-[15px] py-4"><i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i></td>
          </tr>
          <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <td class="px-[15px] py-4 max-w-44">Airi Satou Airi Satou Airi Satou</td>
            <td class="px-[15px] py-4">example@gmail.com</td>
            <td class="px-[15px] py-4">01112223334</td>
            <td class="px-[15px] py-4">22</td>
            <td class="px-[15px] py-4">Leader</td>
            <td class="px-[15px] py-4">Hà Nội</td>
            <td class="px-[15px] py-4">Nghỉ ốm</td>
            <td class="px-[15px] py-4"><i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i></td>
          </tr>
          <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <td class="px-[15px] py-4 max-w-44">Airi Satou Airi Satou Airi Satou</td>
            <td class="px-[15px] py-4">example@gmail.com</td>
            <td class="px-[15px] py-4">01112223334</td>
            <td class="px-[15px] py-4">22</td>
            <td class="px-[15px] py-4">Leader</td>
            <td class="px-[15px] py-4">Hà Nội</td>
            <td class="px-[15px] py-4">Nghỉ ốm</td>
            <td class="px-[15px] py-4"><i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i></td>
          </tr>
          <tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <td class="px-[15px] py-4 max-w-44">Airi Satou Airi Satou Airi Satou</td>
            <td class="px-[15px] py-4">example@gmail.com</td>
            <td class="px-[15px] py-4">01112223334</td>
            <td class="px-[15px] py-4">22</td>
            <td class="px-[15px] py-4">Leader</td>
            <td class="px-[15px] py-4">Hà Nội</td>
            <td class="px-[15px] py-4">Nghỉ ốm</td>
            <td class="px-[15px] py-4"><i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i></td>
          </tr>

        </tbody>
      </table>
      <div class="pagination flex justify-center mt-5">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script setup>
import Pagination from '../common/Pagination.vue';

</script>

<style scoped>
.personnel__table td {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
}


.personnel__table tr:hover {
  background: #e7e6e6;
}
</style>
