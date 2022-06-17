import React, { useState } from 'react'
import './Buy.css'
import Cookies from 'universal-cookie'

import LevelViewsPrice from './LevelViewsPrice'
import Colisor from './Colisor'
import Details from './Details'
import Emotes from './Emotes'
import GunsSkins from './GunsSkins'
import Characters from './Characters'
import Pets from './Pets'
import AddToCardOrBuy from './AddToCardOrBuy'
import PreviousNext from './PreviousNext'

function Buy({ data }) {
  const cookie = new Cookies()
  const [index, setIndex] = useState(0)
  const previous = () => {
    if (index > 0) {
      console.log(index - 1)
      setIndex(index-1)
    }
  }
  const next = () => {
    // IF THE NUMBER OF DATA GOT FROM DATABASE FINISHES THEN REQUEST FOR REMAINGING DATA
    if (index < data.length - 1) {
      console.log(index + 1)
      setIndex(index+1)
    }
  }
  const addToCart = () => {
    let previousCookies = cookie.get("ids")
    if (!previousCookies.data.includes(data[index].freefireId)) {
      data.push(data[index].freefireId)
      previousCookies.data = data
      cookie.set("ids", previousCookies)
    }
    
  }
  if(data.length===0){
    return <div className="noData">
      There are not more sellers
    </div>
  }
  return (
    <div className='buyBodyHolder' >
      <LevelViewsPrice level={data[index].idLevel} price={data[index].sellingPrice} views={data[index].views} />
      <Colisor />
      <Details />
      <Emotes />
      <GunsSkins />
      <Characters />
      <Pets />
      <AddToCardOrBuy addToCart={addToCart} />
      <PreviousNext previous={previous} next={next} />
    </div>
    //   <div className='buyBodyHolder' >
    //   <LevelViewsPrice level={data[index].idLevel} views={data[index].views} price={data[index].sellingPrice} />
    //   <Colisor colisorData={data[index].colisorData} />
    //   <Details id={data[index].freefireId} diamondsAvailable={data[index].diamondsAvailable} />
    //   <Emotes emotesData={data[index].emotesData} />
    //   <GunsSkins gunsSkinsData={data[index].gunsSkinsData} />
    //   <Characters charactersData={data[index].charactersData} />
    //   <AddToCardOrBuy addToCart={addToCart} />
    //   <PreviousNext next={next} previous={previous} />
    // </div>
  )
}

export default Buy