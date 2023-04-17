import React, { useEffect, useState } from "react";
import "./Weatherapp.css";
import { FaStreetView } from "react-icons/fa";
import axios from "axios"

const Weatherapp = () => {
  const [city, Setcity] = useState("lucknow");
  const[Weather,setWeather]=useState({});
//   const base_url = "http://api.openweathermap.org/data/2.5/weather?"
//   const api_key="7783b90a23da7e239e0d289f2003f3fe"
//   const city_name="mumbai"


//  const  complete_url = base_url + "appid=" + api_key + "&q=" + city_name

  

  useEffect(()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e8df00f36536dcaa3cb1aa6941d7d060`).then((res)=>{
        setWeather(res) 
    })

  },[city])
  console.log(Weather)

  return (
    <div>
      <div className="box">
        <div className="inputData">
          <input
            className="inputField"
            type="search"
            value={city}
            placeholder="enter place here"
            onChange={(e) => {
              Setcity(e.target.value);
            }}
          />
        </div>
        <div className="location">
          <FaStreetView size={60}  />
          {Weather.data && <h1 className="location-text">{Weather.data.name}</h1>}
        </div>
        {Weather.data && <div className="temp-details">
            <div className="temperature">
            <h1>{Weather.data.main.temp}°Cel</h1>
            </div>
            <div className="min_max-temp">
            <span>Min: {Weather.data.main.temp_min}°Cel | Max: {Weather.data.main.temp_max}°Cel</span>
            </div>
        </div>}
      </div>
      
    </div>
  );
};

export default Weatherapp;
