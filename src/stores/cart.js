import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const count = computed(() => {
    return items.value.length
  })
  const addToCart = (item) => {
    items.value.push({ item: item, quantity: 1 })
  }
  const removeFromCart = (item) => {
    items.value = items.value.filter((e) => {
      if (e !== item) {
        return e
      }
    })
  }
  const incrementItem = (el) => {
    el.quantity++
  }
  const decrementItem = (el) => {
    if (el.quantity > 1) el.quantity--
  }
  const isSelected = (el) => {
    for (let i of items.value) {
      if (i.item.id === el.id) {
        return true
      }
    }
    return false
  }
  const total = computed(() => {
    return items.value.reduce((total, item) => {
      return total + item.item.price * item.quantity
    }, 0)
  })
  const getIdAndQuantityItem = () => {
    const result = []
    items.value.forEach((item) => {
      result.push({
        id: item.item.id,
        quantity: item.quantity,
      })
    })
    return result
  }
  return {
    count,
    items,
    total,
    addToCart,
    isSelected,
    removeFromCart,
    incrementItem,
    decrementItem,
    getListItem: getIdAndQuantityItem,
  }
})
