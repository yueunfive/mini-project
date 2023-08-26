import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    const formattedDate = new Date(date.getTime() + 86400000)
      .toISOString()
      .substr(0, 10); // 클릭한 날짜로 바로 처리
    setSelectedDate(date);
    navigate(`/TodoPage/${formattedDate}`);
  };

  return (
    <div className="Home">
      <h2 className="title">캘린더📆</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="calendar"
        locale="en-US" // 미국식 로케일 사용
      />
    </div>
  );
};

export default Home;
