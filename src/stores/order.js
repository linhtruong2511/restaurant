import billingService from '@/service/billingService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const orders = ref([])
  const changeStatus = (id, status) => {
    let check = false
    orders.value.map((item) => {
      if (id === item.id) {
        item.status = status
        check = true
      }
    })

    if (!check) {
      console.log('change status: Không có đơn hàng nào trùng với id: ' + id)
    }
  }
  return { orders, changeStatus }
})
