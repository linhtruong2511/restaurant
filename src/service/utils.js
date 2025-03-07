export const domain = 'http://127.0.0.1:8000/'
export const init = (method, data) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
}
export const setCookie = (name, value, exdays = 5) => {
  const date = new Date()
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}
