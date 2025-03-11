import { domain, getCookie, init } from './utils'

const billingService = {
  confirm: (orderId) => {
    fetch(
      domain + 'billing/',
      init('POST', getCookie('token'), {
        order_id: orderId,
      }),
    )
      .then((response) => response.json())
      .then((result) => console.log('billing service result: ', result))
      .catch((err) => console.log('billing service error: ', err))
  },
}

export default billingService
