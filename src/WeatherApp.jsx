import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
        const [weatherInfo, SetWeatherInfo]=useState({
            city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
        }); 

        let updateInfo = (newInfo) =>{
            SetWeatherInfo(newInfo);
        }; 

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Vaishali</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}