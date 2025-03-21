import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingAdmin = defineStore('settingAdmin', () => {
  const headerSticky = ref(false)
  return { headerSticky }
})
