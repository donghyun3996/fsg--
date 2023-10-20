import axios from 'axios'
import { arMA } from 'date-fns/locale'
import { useEffect, useState } from 'react'

export const AgencyTotal = (s: any, e: any) => {
  const token = window.localStorage.getItem('token')

  axios({
    method: 'POST',
    url: 'http://3.36.29.233:80/api/agency_get_total',
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
      console.log(res.data.resultArray)
      localStorage.setItem(
        'dworkload',
        JSON.stringify(await res.data.resultArray)
      )
    })
    .catch((error) => {
      console.log(error)
    })
}
