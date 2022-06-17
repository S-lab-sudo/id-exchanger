import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Buy from './Buy/Buy'
import Sell from './Sell/Sell'
import Topup from './Topup/Topup'

function MainWindow({data}) {
    return (
        <div className="mainWindow">
            <Routes>
                <Route path='/' element={<Buy data={data} />} ></Route>
                <Route path='/sell' element={<Sell />} ></Route>
                <Route path='/topup' element={<Topup />} ></Route>
            </Routes>
        </div>
    )
}

export default MainWindow