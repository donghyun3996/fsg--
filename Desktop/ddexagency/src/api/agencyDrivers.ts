import axios from 'axios'
import { useEffect, useState } from 'react'

export const AgencyDrivers = () => {
  const token = window.localStorage.getItem('token')
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'http://3.36.29.233:80/api/agency_drivers',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        authorization: `Bearer ${token}`,
        token: `${token}`,
      },
    })
      .then(async (res) => {
        localStorage.setItem('drivers', JSON.stringify(await res.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
}
