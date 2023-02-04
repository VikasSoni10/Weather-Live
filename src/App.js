import './App.css';
import React, { useEffect, useState } from 'react';
import WeatherNav from './weatherNav';
import WeatherAni from './WeatherAni';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
    'X-RapidAPI-Key': "2d48ebed28mshd087b77993e8e37p12eb3ejsn2cd34e468b16",
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
    <p className="tem">{data.temp}&deg;C</p>

    <Table>
    <Thead>
    <Tr>
    <Th>Temperature</Th>
    <Th>Min. Temp</Th>
    <Th>Max. Temp</Th>
    <Th>Humidity</Th>
    <Th>Wind Speed</Th>
    <Th>Wind Degree</Th>
    <Th>Sunrise</Th>
    <Th>Sunset</Th>
    </Tr>
    </Thead>
    <Tbody>
    <Tr>
    <Td>{data.temp}<span>&deg;C</span></Td>
    <Td>{data.min_temp}<span>&deg;C</span></Td>
    <Td>{data.max_temp}<span>&deg;C</span></Td>
    <Td>{data.humidity}</Td>
    <Td>{data.wind_speed}</Td>
    <Td>{data.wind_degrees}</Td>
    <Td>{data.sunrise}</Td>
    <Td>{data.sunset}</Td>
    </Tr>
    </Tbody>
    </Table>
  

    <div className="footer">
    <p>&copy; 2023 Copyright: All Rights Reserved</p>
    </div>
</div>
  );
}

export default App;
