import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const d = new Date()
  const data = ref([
    {
      name: 'Nguyễn Văn A',
      author: 'Trương Khánh Linh',
      status: 'Pending',
      time: '2025-03-22T21:27',
    },
  ])
  const addData = (newData) => {
    data.value.push(newData)
  }
  return { data, addData }
})
