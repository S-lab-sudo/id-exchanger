import React from 'react'

function LevelViewsPrice({level,views,price}) {
  return (
    <div className='levelViewsPriceHolder' >
      <li>Level :{level} </li>
      <li>Views :{views} </li>
      <li>Price :{price} </li>
    </div>
  )
}

export default LevelViewsPrice