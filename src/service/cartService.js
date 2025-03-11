import { domain, getCookie } from './utils'
import { init } from './utils'
const cartService = {
  booking: async (data) => {
    const token = getCookie('token').trim()
    const initOption = init('POST', token, data)
    let bookingData = null
    await fetch(domain + 'order/submit', initOption)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        bookingData = result
        return true
      })
      .catch((err) => {
        console.log('error: ', err)
        return false
      })
  },
}

export default cartService
