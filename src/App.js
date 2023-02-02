import './App.css';
import React, { useEffect, useState } from 'react';
import WeatherNav from './weatherNav';
import WeatherAni from './WeatherAni';

function App() {

  const [data,setData]=useState([]);
  const [city,setCity]=useState("Delhi");

  const getWeather= (temp)=>{
    setCity(temp);
    }

   useEffect(()=>{
    
       fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,{
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '2d48ebed28mshd087b77993e8e37p12eb3ejsn2cd34e468b16',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
    }).then((result)=>{
      result.json().then((response)=>{
        setData(response);
      })
    })
},[city]);
   

  return (
    <div className="App">
     <WeatherNav alert={getWeather}/>
    <WeatherAni />

    <h1>{city}</h1>
<div style={{overflowX:"auto"}}>
    <table>
    <tbody>
    <tr>
    <th>Temperature</th>
    <th>Min. Temp</th>
    <th>Max.Temp</th>
    <th>Humidity</th>
    <th>Wind Speed</th>
    <th>Wind Degree</th>
    <th>Sunrise</th>
    <th>Sunset</th>
    </tr>
    <tr>
    <td>{data.temp}<span>&deg;C</span></td>
    <td>{data.min_temp}<span>&deg;C</span></td>
    <td>{data.max_temp}<span>&deg;C</span></td>
    <td>{data.humidity}</td>
    <td>{data.wind_speed}</td>
    <td>{data.wind_degrees}</td>
    <td>{data.sunrise}</td>
    <td>{data.sunset}</td>
    </tr>
    </tbody>
    </table>
    </div>

    <div className="footer">
    <p>&copy; 2022 Copyright: All Rights Reserved</p>
    </div>
</div>
  );
}

export default App;
