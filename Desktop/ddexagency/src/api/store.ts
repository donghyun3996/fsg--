import axios from 'axios'
import { useEffect, useState } from 'react'
export const Store = () => {
  const [data, getData] = useState<any | any>()
  const token = window.localStorage.getItem('token')
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'http://3.36.29.233:80/api/agency_get_list',
      data: {
        authorization: `Bearer ${token}`,
        token: `${token}`,
      },
    })
      .then((res) => {
        getData(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return data
}
