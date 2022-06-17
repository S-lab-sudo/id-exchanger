import React from 'react'
import './Header.css'
import adc from '../../Images/adc.png'
import { useState } from 'react'
import Cookies from 'universal-cookie'
import { useEffect } from 'react'

function Header() {
  const [cartedAmount, setCartedAmount] = useState(0)
  const [sortby, setSortby] = useState(0)

  const sortingWays = ["Hottest", "Lowest Price", "Highest Price", "Price Range"]
  useEffect(() => {
    const cookie = new Cookies()
    const data = cookie.get("ids")
    if (data) {
      setCartedAmount(data.length)
    } else {
      setCartedAmount(0)
    }
  }, [])
  return (
    <div className="header">
      <div className="cart">
        <img width="30px" height="auto" src={adc} alt="" />:{cartedAmount}
      </div>
      <div className="sorting">
        Sort By : Hottest
      </div>
    </div>
  )
}

export default Header