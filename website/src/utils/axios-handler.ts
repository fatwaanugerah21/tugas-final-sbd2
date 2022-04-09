import Axios from 'axios'
import { serverEndpoint } from './constants'

export async function sendLogin(username: string, password: string) {
  const resp = await Axios.post(serverEndpoint, {
    username,
    password,
  })

  return resp
}
