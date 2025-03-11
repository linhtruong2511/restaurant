import { domain, getCookie, init } from './utils'

const orderService = {
  getOrders: (offset = 0) => {
    const token = getCookie('token')
    fetch(domain + 'order/', init('GET', token, null))
      .then((response) => response.json())
      .then((result) => {
        return result
      })
      .catch((err) => console.log(err))
  },
}

export default orderService
