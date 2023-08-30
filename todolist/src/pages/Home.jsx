import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    const formattedDate = new Date(date.getTime());
    // .toISOString().substr(0, 10); // 클릭한 날짜로 바로 처리
    const month = formattedDate.getMonth() + 1; // 0부터 시작하므로 +1
    const day = formattedDate.getDate();
    localStorage.setItem("month", String(month));
    localStorage.setItem("day", String(day));
    setSelectedDate(date);
    navigate(`/todoPage/${formattedDate}`);
  };

  const handleLogout = () => {
    const userId = localStorage.getItem("userId");

    axios
      .get(`/api/users/${userId}/log-out`)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  };

  return (
    <div className={styles.Home}>
      <h2 className={styles.title}>캘린더📆</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className={styles.calendar}
        locale="en-US" // 미국식 로케일 사용
      />
      <button className={styles.log_out} onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default Home;
