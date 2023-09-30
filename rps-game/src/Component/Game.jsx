import React, { useState, useEffect } from "react";

import Result from "./Result";

function Game() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);

  // 유저(플레이어) 선택
  function handleUserChoice(choice) {
    setUserChoice(choice);
    handleComputerChoice();
    setIsGameStarted(true);
  }

  // 게임 재시작
  const handlePlayAgain = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setIsGameStarted(false);
  };

  // 컴퓨터 선택(랜덤)
  // useEffect를 사용하여 순서를 정리함으로써 비동기 문제를 해결
  useEffect(() => {
    if (userChoice !== "") {
      handleComputerChoice();
    }
  }, [userChoice]);

  function handleComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const computerRandomChoice = choices[Math.floor(Math.random() * 3)]; // 난수 생성
    setComputerChoice(computerRandomChoice);
    getResult();
  }

  // 승패 여부 체크
  // useEffect를 사용하여 순서를 정리함으로써 비동기 문제를 해결
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
        userChoice={userChoice}
        computerChoice={computerChoice}
      />
      {isGameStarted ? (
        <button onClick={handlePlayAgain} className="replay-btn">
          Play Again!
        </button>
      ) : (
        <div className="btn">
          <button onClick={() => handleUserChoice("rock")}>✊</button>
          <button onClick={() => handleUserChoice("scissors")}>✌️</button>
          <button onClick={() => handleUserChoice("paper")}>🖐️</button>
        </div>
      )}
    </div>
  );
}

export default Game;
