import React, { useState } from 'react'
import './Sorting.css'

function Sorting({ sortingMethod }) {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    return (
        <div className="sorting">
            <div className="sortingMethod">
                <div onClick={() => sortingMethod(1)} className="hottest">Hottest</div>
                <div onClick={() => sortingMethod(2)} className="lowestPrice">Lowest Price</div>
                <div onClick={() => sortingMethod(3)} className="highestPrice">Hishest Price</div>
                <div onClick={() => sortingMethod({ value: 4 })} className="priceRange">
                    <label htmlFor="">
                        Price Range
                    </label>
                    <div className="min"><input type="text" placeholder="Minimun Price" value={min} onChange={e => setMin(e.target.value)} /></div>
                    <div className="max"><input type="text" placeholder="Maximum Price" value={max} onChange={e => setMax(e.target.value)} /></div>
                </div>
            </div>
        </div>
    )
}

export default Sorting