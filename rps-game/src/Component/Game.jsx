import React, { useState, useEffect } from "react";

import Result from "./Result";

function Game() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  // 유저(플레이어) 선택
  function handleUserChoice(choice) {
    setUserChoice(choice);
    handleComputerChoice();
  }

  // 컴퓨터 선택(랜덤)
  // useEffect로 비동기 문제 해결!(이 부분은 좀 더 공부해야 할듯)
  useEffect(() => {
    if (userChoice !== "") {
      handleComputerChoice();
    }
  }, [userChoice]);

  function handleComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const computerRandomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerRandomChoice);
  }

  // 승패 여부 체크
  // useEffect로 비동기 문제 해결!(이 부분은 좀 더 공부해야 할듯)
  useEffect(() => {
    if (userChoice !== "" && computerChoice !== "") {
      getResult();
    }
  }, [userChoice, computerChoice]);

  function getResult() {
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      setResult("이겼습니다😀");
    } else if (
      (userChoice === "scissors" && computerChoice === "rock") ||
      (userChoice === "paper" && computerChoice === "scissors") ||
      (userChoice === "rock" && computerChoice === "paper")
    ) {
      setResult("졌습니다🥲");
    } else {
      setResult("비겼습니다😗");
    }
  }

  // 각각의 가위, 바위, 보 선택 버튼 컴포넌트
  return (
    <div>
      <Result
        result={result}
        setResult={setResult}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
        computerChoice={computerChoice}
        setComputerChoice={setComputerChoice}
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => handleUserChoice("rock")}>✊</button>
        <button onClick={() => handleUserChoice("scissors")}>✌️</button>
        <button onClick={() => handleUserChoice("paper")}>🖐️</button>
      </div>
    </div>
  );
}

export default Game;
