// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=ac9e82ee9dd353c5a91d277434f33283

import "./style.css"
import React, { useEffect, useState } from "react";
import WeatherCard from "./weathercard";

const Temp = () => {
    const [searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempInfo] = useState("");


    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ac9e82ee9dd353c5a91d277434f33283`;
            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            const myweather = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset
            };
            setTempInfo(myweather);
            // const {country, sunset
            console.log(temp);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    },[])
    return (
        <>
           <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} 
          />

          <button
            className="searchButton"
            type="button"
                        onClick={getWeatherInfo}
                    >
            Search
                    </button>
        </div>
            </div>
            <WeatherCard tempInfo={tempInfo} />
        </>
    )
}

export default Temp;