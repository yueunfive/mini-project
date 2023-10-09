import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Weather() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});

  const API_KEY = process.env.REACT_APP_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: apiUrl,
        });
        console.log(data);
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  // 위치 정보를 가져온 후에 날씨 정보를 검색하는 함수
  const getLocationAndSearchWeather = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치", lat, lon);

      // 위치 정보를 가져온 후에 API를 호출
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      console.log(data);
      setResult(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getLocationAndSearchWeather();
  }, []);

  return (
    <WeatherWrap>
      <div className="contentWrap">
        <input
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        ></input>
        {Object.keys(result).length !== 0 && (
          <Container>
            <div className="icon">
              <img
                src={`https://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`}
              />
            </div>
            <ResultWrap>
              <div className="city">{result.data.name}</div>
              <div className="temperature">
                {(Math.round(result.data.main.temp - 273.15) * 10) / 10}°C
              </div>
              <div className="sky">{result.data.weather[0].main}</div>
            </ResultWrap>
          </Container>
        )}
      </div>
    </WeatherWrap>
  );
}

const WeatherWrap = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  margin-top: 30px;
  border-radius: 10px;
  padding: 5px;
  position: relative;

  .contentWrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  input {
    width: 150px;
    padding: 16px;
    border: 2px solid rgb(176, 216, 176);
    border-radius: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px rgb(176, 216, 176) solid;
  border-radius: 8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
  }
`;
