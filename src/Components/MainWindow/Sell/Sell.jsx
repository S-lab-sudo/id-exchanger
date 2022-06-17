import React, { useEffect, useState } from 'react'
import './Sell.css'
import axios from 'axios'

function Sell() {
  const [idLevel, setIdLevel] = useState('')
  const [diamondsAvailable, setDiamondsAvailable] = useState('')
  const [freefireId, setFreefireId] = useState('');
  const [freefirePassword, setFreefirePassword] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [emotesImages, setEmotesImages] = useState('')
  const [gunsImages, setGunsImages] = useState('')
  const [characters, setCharacters] = useState('')
  const [petImages, setPetImages] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [maxEmoteImages, setMaxEmoteImages] = useState(4)
  const [maxGunsImages, setMaxGunsImages] = useState(4)
  const [maxCharactersImages, setMaxCharactersImages] = useState(4)
  const [maxPetImages, setMaxPetImages] = useState(4)


  // ERRORS AND SUCCESS
  const [err, setErr] = useState('')
  const [success, setSuccess] = useState('')

  const handleSublitForm = () => {
  let dataToSendBackend=new FormData()
  let jsonDataToSend=JSON.stringify({emailAddress,idLevel,diamondsAvailable,sellingPrice,freefireId,freefirePassword,phoneNumber})
  dataToSendBackend.append('jsonDataToSend',jsonDataToSend)
  const allImages=[emotesImages,gunsImages,characters,petImages]
  allImages.map((v,i)=>{
    let dynamicText= i === 0 ? 'emotes' : i === 1 ? 'guns' : i === 2 ? 'characters' : 'pets'
    for(let j=0;j<v.length;j++){
      dataToSendBackend.append(dynamicText,v[j])
    }
  })
  axios.post('http://localhost:8000/backend/sell',dataToSendBackend).then(res=>{
    console.log(res)
  })
  }

  useEffect(() => {
    setMaxEmoteImages(4 - emotesImages.length)
    setMaxGunsImages(4 - gunsImages.length)
    setMaxCharactersImages(4 - characters.length)
    setMaxPetImages(4 - petImages.length)
  }, [emotesImages, gunsImages, characters, petImages])
  return (
    <div className="sell">
      {
        err ? <div className="err">{err}</div> : success ? <div className="success">{success}</div> : null
      }
      <label className='sellNotice' htmlFor="">Please Enter your ID details . <u> The more you put details the chance of ID getting sold increases. </u> </label>
      <div className="idLevel">
        <input type="Number" placeholder='Freefire ID Level' value={idLevel} onChange={(e) => setIdLevel(e.target.value)} />
      </div>
      <div className="diamondsAvailable">
        <input type=" Number" placeholder='Diamonds Available' value={diamondsAvailable} onChange={(e) => setDiamondsAvailable(e.target.value)} />
      </div>
      <div className="idTag">
        <input type="text" placeholder='UID' value={freefireId} onChange={(e) => setFreefireId(e.target.value)} />
      </div>
      <div className="idPassword">
        <input type="password" placeholder='Password' value={freefirePassword} onChange={e => setFreefirePassword(e.target.value)} />
      </div>
      <div className="emailAddress">
        <input type="email" placeholder='Email Address' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
      </div>
      <div className="sellingPrice">
        <input type="Number" placeholder='Id Selling Price' value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
      </div>
      <div className="phoneNumber">
        <input type="Number" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="noticeEmotes">
        <label htmlFor="">
          Upload your Emotes' Photos or Videos
        </label>
        <label style={{ float: "right" }} htmlFor="">
          Remaining : {maxEmoteImages}
        </label>
      </div>
      <div className="emoteImagesUpload">
        <input name='EmotesVideo' type="file" className='fileInput' multiple={true} placeholder="Upload Images/Videos" onChange={e => setEmotesImages(e.target.files)} />
      </div>
      <div className="noticeGuns">
        <label htmlFor="">
          Upload your Guns' Photos or Videos
        </label>
        <label style={{ float: "right" }} htmlFor="">
          Remaining : {maxGunsImages}
        </label>
      </div>
      <div className="gunsImagesUpload">
        <input name='GunsVideo' type="file" className='fileInput' multiple={true} onChange={e => setGunsImages(e.target.files)} />
      </div>
      <div className="noticeCharacter">
        <label htmlFor="">
          Upload your Characters' Photos or Videos
        </label>
        <label style={{ float: "right" }} htmlFor="">
          Remaining : {maxCharactersImages}
        </label>
      </div>
      <div className="charactersImagesUpload">
        <input name='PetVideo' type="file" className='fileInput' multiple={true} onChange={e => setCharacters(e.target.files)} />
      </div>
      <div className="petImages">
        <label htmlFor="">
          Upload your Pets' Photos or Videos
        </label>
        <label style={{ float: "right" }} htmlFor="">
          Remaining : {maxPetImages}
        </label>
      </div>
      <div className="petsImagesUpload">
        <input name='CharacterVideo' type="file" className='fileInput' multiple={true} onChange={e => setPetImages(e.target.files)} />
      </div>

      <div className="sellId">
        <button className='sellID' onClick={() => handleSublitForm()} >Sell ID</button>
      </div>
    </div>
  )
}

export default Sell