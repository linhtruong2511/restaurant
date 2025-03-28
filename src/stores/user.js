import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const info = ref(null)
  const active = ref(false)
  return { info, active }
})
