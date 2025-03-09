import { useUserStore } from '@/stores/user'
import { domain, init, setCookie } from './utils'

export const login = async (data) => {
  const response = await fetch(domain + `user/login`, init('POST', null, data))
  const json = await response.json()
  if (json.access) {
    setCookie('token', json.access)
    return true
  }
  return false
}
export const register = async (data) => {
  try {
    const response = await fetch(domain + 'user/register', init('POST', null, data))
    const json = await response.json()
    return true
  } catch (e) {
    console.log('error: ' + e)
    return false
  }
}
export const getInfoUser = async () => {
  const userStore = useUserStore()
  const cookies = document.cookie.split(';')
  let token = null
  cookies.forEach((item) => {
    let cookie = item.split('=')
    if (cookie[0].trim() == 'token') {
      token = cookie[1]
    }
  })
  if (!token) return
  const response = await fetch(domain + 'user/info', init('GET', token))
  const json = await response.json()
  userStore.info = json
}
