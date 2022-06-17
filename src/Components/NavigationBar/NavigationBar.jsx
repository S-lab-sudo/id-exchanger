import React from 'react'
import './NavigationBar.css'
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <div className="navigationBar">
        <Link to={'/sell'} >Sell ID</Link>
        <Link to={'/'} >Buy ID</Link>
        <Link to={'/topup'} >Top Up</Link>
    </div>
  )
}

export default NavigationBar