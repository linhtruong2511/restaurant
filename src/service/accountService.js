import { domain, init, setCookie } from './utils'

export const login = async (data) => {
  const response = await fetch(domain + `user/login`, init('POST', data))
  const json = await response.json()
  if (json.access) {
    setCookie('token', json.access)
    return true
  }
  return false
}
