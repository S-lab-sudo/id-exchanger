// s max gun compulsary show
import React,{useState} from 'react'
import down from '../../../Images/down.png'
import gun1 from '../../../Images/gun1.png'
import gun from '../../../Images/gun.png'

function GunsSkins() {
  const [showGunsSkin, setShowGunsSkin] = useState(false)
  return (<>
    <div className='emoteHolder' onClick={() => setShowGunsSkin(!showGunsSkin)} >
      <div className="emotesHolder">
        <label htmlFor="">Guns Skins</label>
        <img src={down} height="25px" width="25px" alt="" />
      </div>
      {
        showGunsSkin && <div className="emotes">
          <div className="emotesImages">
            <div className="gunImageHolder">
              <img src={gun} alt="" />
            </div>
            <div className="gunImageHolder">
              <img src={gun1} alt="" />
            </div>
          </div>
          <div className="emotesImages">
            <div className="gunImageHolder">
              <img src={gun1} alt="" />
            </div>
            <div className="gunImageHolder">
              <img src={gun} alt="" />
            </div>
          </div>
        </div>
      }
    </div>
  </>
  )
}

export default GunsSkins