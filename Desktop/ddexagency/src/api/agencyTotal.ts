import axios from 'axios'
import { useEffect, useState } from 'react'

export const AgencyTotal = () => {
  const token = window.localStorage.getItem('token')
  let sDate = new Date('2023-10-01')
  let eDate = new Date('2023-10-11')

  useEffect(() => {
    axios({
      method: 'POST',
      url: 'http://3.36.29.233:80/api/agency_get_total',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        authorization: `Bearer ${token}`,
        token: `${token}`,
      },
      data: {
        startDay: '2023-10-01',
        endDay: eDate,
        storeName: -1,
      },
    })
      .then(async (res) => {
        console.log(res)
        localStorage.setItem('dworkload', JSON.stringify(await res.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
}
