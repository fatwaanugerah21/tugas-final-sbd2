import Axios from 'axios'
import { serverUrl } from './constants'

export async function sendLogin(username: string, password: string) {
  const resp = await Axios.post(serverUrl, {
    username,
    password,
  })

  return resp
}

export async function sendAdminSignup(username: string, password: string) {
  const endpoint = '/admin/signup'

  console.log(`${serverUrl}${endpoint}`)

  const resp = await Axios.post(`${serverUrl}${endpoint}`, {
    username,
    password,
  })

  return resp
}
