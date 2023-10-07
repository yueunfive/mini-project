import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

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
        alert("그런 도시는 없단다🤫");
      }
    }
  };

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
        {/* 이게 뭐임..? */}
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {/* 받아온 데이터는 절대 온도 -> 상대온도로 변환해줌 */}
              {/* Math.round() : 반올림*/}
              {(Math.round(result.data.main.temp - 273.15) * 10) / 10}°C
            </div>
            <div className="sky">{result.data.weather[0].main}</div>
          </ResultWrap>
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

const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px black solid;
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
