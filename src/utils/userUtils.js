import { getInfoUser } from '@/service/accountService'

export const loadUser = async () => {
  await getInfoUser()
}
