
import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./computer/CityComponent";
import WeatherComponent from "./computer/WeatherInfoComponent";
import './App.css';
import './index.css';
import BgVideo from "./BgVideo";





export const WeatherIcons = {
  "01d": "/icons/clear-sky.jpg",
  "01n": "/icons/mist.jpg",
  "02d": "/icons/day.svg",
  "03d": "/icons/cloudy.jpg",
  "04d": "/icons/perfect-day.jpg",
  "09d": "/icons/rain.jpg",
  "10d": "/icons/snow.jpg",
  "11d": "/icons/thunderstorm.jpg",
};



const Main = styled.div`
display:flex;
align-items:center;
width:100%;
height:100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 680px;
  @media(min-width:0px) and (max-width:600px){
    width:300px;
  }
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  font-family: Montserrat;
  background:rgba(62, 109, 190, 0.62);
  border-radius: 20px;
 
 
 
`;

const AppLabel = styled.span`
  color: white;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;


  function App(){

   
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };

  return(

    <Main>
      <BgVideo/>
      <Container>
      <AppLabel><h2 class='pop-outin'>CHECK THE CURRENT WEATHER CHARM OF YOUR HOMETOWN</h2></AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      
    </Container>
    </Main>

 
   
    
     
  );
}

export default App;
