import { domain, getCookie } from './utils'
import { init } from './utils'
const cartService = {
  booking: async (data) => {
    const token = getCookie('token').trim()
    const initOption = init('POST', token, data)
    const response = await fetch(domain + 'order/submit', initOption)
    if (response.ok) {
      const result = await response.json()
      console.log('new order: ', result)
      return true
    } else {
      console.log('error: ', await response.json())
      return false
    }
  },
}
export default cartService
