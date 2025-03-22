<template>
  <div class="chatbox flex-1/2 flex flex-col justify-center rounded-lg shadow-lg p-5 relative">
    <div class="chatbox__header text-blue-700 flex-2/12">
      <i class="fa-solid fa-user-group mr-5 "></i>
      <span class="text-3xl font-bold">Chatbox</span>
    </div>
    <div class="chatbox__body flex-10/12">
      <div class="container px-4 py-2 bg-blue-50 h-full rounded-xl max-h-84 overflow-auto">
        <div class="messages">
          <div class="message p-4 flex gap-4">
            <span class="avatar">
              <img class="object-cover h-5 w-5" src="../../assets/user.png" alt="">
            </span>
            <div class="content p-2 w-full rounded-lg border border-gray-600  ">Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Distinctio similique delectus</div>
          </div>
          <div class="message p-4 flex gap-4 flex-row-reverse">
            <span class="avatar">
              <img class="object-cover h-5 w-5" src="../../assets/user.png" alt="">
            </span>
            <div class="content p-2 w-full rounded-lg border border-gray-600  ">Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Distinctio similique delectus</div>
          </div>
          <div class="message p-4 flex gap-4">
            <span class="avatar">
              <img class="object-cover h-5 w-5" src="../../assets/user.png" alt="">
            </span>
            <div class="content p-2 w-full rounded-lg border border-gray-600  ">Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Distinctio similique delectus</div>
          </div>
        </div>
      </div>
    </div>
    <form class="absolute bottom-3 w-full flex items-center gap-3 mx-auto">
      <input class="w-10/12 py-2 px-4 rounded-lg border focus:outline-none border-blue-300" type="text"
        placeholder="message">
      <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped></style>
