import { domain } from './domain'

export const getAllCategory = async () => {
  const response = await fetch(domain + 'menu/item')
  const data = await response.json()
  return data.results
}

export const getItems = async (category, offset) => {
  const response = await fetch(domain + `menu/item/?limit=12&offset=${offset}&category=` + category)
  const data = response.json()
  return data
}
