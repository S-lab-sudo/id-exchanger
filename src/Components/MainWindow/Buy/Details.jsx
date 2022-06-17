import React from 'react'

function Details({id,diamondsAvailable}) {
  return (
    <div className='idDiamonds' >
      <div className="onSellId">
        <label className='priceText' >ID : </label> {id}
      </div>
      <div className="idDiamondsAvailable">
        <label className='priceText' >Diamonds : </label> {diamondsAvailable}
      </div>
    </div>
  )
}

export default Details