import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const data = ref([
    {
      id: 1,
      name: 'Phở bò tái nạm',
      type: 'Món lẻ',
      price: 35000,
      status: 'Còn',
      note: 'pho bo tai nam chi lam tai nam',
    },
  ])
  return { data }
})
