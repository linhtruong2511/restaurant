export const domain = 'https://restaurantapi.up.railway.app/'
export const init = (method, token = null, data = null) => {
  const option = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (token) {
    option.headers['Authorization'] = 'Bearer ' + token
  }
  if (data) {
    option['body'] = JSON.stringify(data)
  }
  return option
}
export const setCookie = (name, value, exdays = 5) => {
  const date = new Date()
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + date.toUTCString()
  if (exdays) {
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
  } else {
    document.cookie = name + '=' + value
  }
}
export const getCookie = (name) => {
  const cookie = document.cookie.split(';')
  for (let item of cookie) {
    const temp = item.trim().split('=')
    if (temp[0] == name) {
      return temp[1]
    }
  }
  return ''
}
