import React,{useEffect, useState} from 'react';
import './App.css';
import {Charts} from './Components/Charts/Charts';
import {Cards} from './Components/Cards/Cards';
import {CountryPicker} from './Components/CountryPicker/CountryPicker';

function App() {
  let [apiData,setapiData] = useState({})
  // let [dailyData,setDailyData] = useState([])
  useEffect(() => {
    async function getData() {
      // try{
        const response = await fetch("https://covid19.mathdro.id/api");
        let data = await response.json();
        // console.log(data["confirmed"])
        const modifiedData = {
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
          lastUpdate: data.lastUpdate
        }
        setapiData(modifiedData)
        // console.log(modifiedData)
      // }
//       catch(errr){
// console.log("hello")
//       }
        // console.log(modifiedData.confirmed)
    }
    getData()
},[])
  return (
    <div>
      <Cards apiData = {apiData}/>
      <CountryPicker apiData = {apiData} />
      <Charts apiData = {apiData} />
    </div>
  );
}

export default App;
