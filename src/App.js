import './App.css';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import MainWindow from './Components/MainWindow/MainWindow';
// import Sorting from './Components/Sorting/Sorting';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [dataFromBackend, setDataFromBackend] = useState([{ idLevel: 100, views: 100, sellingPrice: 2000, colisorData: [1, 2, 3, 4], id: 12394756, diamondsAvailable: 1000, emotesData: [1, 2, 3, 4], gunsSkinData: [1, 2, 3, 4], characterData: [1, 2, 3, 4] }, { idLevel: 10, views: 10, sellingPrice: 200, colisorData: [1, 2, 3, 4], id: 1239456, diamondsAvailable: 1000, emotesData: [1, 2, 3, 4], gunsSkinData: [1, 2, 3, 4], characterData: [1, 2, 3, 4] }])
  const [copyOfDataFromBackend, setCopyOfDataFromBackend] = useState([])// CHANGE THIS STATE TO FIRST CONS DATA
  const sortingMethod = (value) => {
    if (value === 1) {
      setDataFromBackend(copyOfDataFromBackend)
    }
    if (value === 2) {
      let newArray = dataFromBackend.sort((a, b) => b.sellingPrice - a.sellingPrice)
      setDataFromBackend(newArray)
    }
    if (value === 3) {
      let newArray = dataFromBackend.sort((a, b) => a.sellingPrice - b.sellingPrice)
      setDataFromBackend(newArray)
    }
    // PASS AS OBJECT {VALUE:4,MIN:2000,MAX:MAX||40000}
    if (value.value === 4) {
      setDataFromBackend(dataFromBackend.filter(v => v.sellingPrice >= value.min && v.sellingPrice <= value.max))
    }
  }
  console.log("TODO : ",sortingMethod)
  useEffect(()=>{
    axios.get('http://localhost:8000/backend/antiddos').then(response=>{
      setDataFromBackend(response.data)
      setCopyOfDataFromBackend(response.data)
    })
  },[])
  return (
    <div className="App">
      <Header />
      {/* <Sorting sortingMethod={sortingMethod} /> */}
      <MainWindow data={dataFromBackend} />
      <NavigationBar />
    </div>
  );
}

export default App;
