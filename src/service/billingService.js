import { useOrderStore } from '@/stores/order'
import { domain, getCookie, init } from './utils'

const billingService = {
  confirm: (orderId) => {
    const orderStore = useOrderStore()
    fetch(
      domain + 'billing/',
      init('POST', getCookie('token'), {
        order_id: orderId,
      }),
    )
      .then((response) => {
        if (!response.ok) {
          throw Error('confirm fail')
        } else {
          return response.json()
        }
      })
      .then((result) => {
        console.log('confirm order: ', result)
        orderStore.changeStatus(orderId, result.order_detail.status)
      })
      .catch(async (err) => {
        console.log(err)
      })
  },
}

export default billingService
