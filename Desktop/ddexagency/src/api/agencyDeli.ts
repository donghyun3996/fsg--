import axios from 'axios'
export const AgencyDeli = (s: any, e: any) => {
  const token = window.localStorage.getItem('token')

  axios({
    method: 'POST',
    url: 'http://3.36.29.233:80/api/agency_deli',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      authorization: `Bearer ${token}`,
      token: `${token}`,
    },
    data: {
      startDay: s,
      endDay: e,
      storeName: -1,
    },
  })
    .then(async (res) => {
      localStorage.setItem('main', JSON.stringify(await res.data))
    })

    .catch((error) => {
      console.log(error)
    })
}
