import axios from 'axios'
import { AgencyDrivers } from './agencyDrivers'

export const SignInApi = async (email: string, password: string) => {
  await axios({
    method: 'POST',
    url: 'http://3.36.29.233:80/api/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      account: email,
      pw: password,
    },
  })
    .then(async (res) => {
      localStorage.setItem('token', res.data.token)
    })
    .catch((error) => {
      console.log(error)
    })
}
