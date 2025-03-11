import { useOrderStore } from '@/stores/order'
import { domain, getCookie, init } from './utils'

const orderService = {
  getOrders: (offset = 0, limit = 5) => {
    const orderStore = useOrderStore()
    const token = getCookie('token')
    fetch(domain + 'order/?offset=' + offset + '&limit=' + limit, init('GET', token, null))
      .then((response) => response.json())
      .then((result) => {
        orderStore.orders = result.results
      })
      .catch((err) => console.log(err))
  },
}

export default orderService
