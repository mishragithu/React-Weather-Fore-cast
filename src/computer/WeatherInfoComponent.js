import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    sunrise: "/icons/sunrise.jpg",
    sunset: "/icons/sunset.jpg",
    humidity: "/icons/humidity.png",
    wind: "/icons/wind.jpg",
    pressure: "/icons/pressure.jpg",
};


const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
  color: white;

`;

const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
 
  font-size: 14px;
  & span {
    font-size: 90px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
  color:white;
`;
const Weatherlogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: white;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  color: white;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  color: white;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay= weather?.weather[0].icon?.includes("d");
    const getTime = (timeStamp) =>{
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </Condition>
                <Weatherlogo src={"icons/too.gif"}/>
            </WeatherContainer>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "sunrise" : "sunset"}
                                      value={getTime(weather?.sys[isDay ? "sunrise" : "sunset"])}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;