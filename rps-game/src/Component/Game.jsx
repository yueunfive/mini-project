import React, { useState } from "react";
import rock from "./rock.jpg";
import scissors from "./scissors.jpg";
import paper from "./paper.jpg";

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
  function handleComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const computerRandomChoice = choices[Math.floor(Math.random() * 3)]; // 랜덤 함수 공부할 필요 있다!
    setComputerChoice(computerRandomChoice);
    getResult();
  }

  // 승패 여부 체크
  function getResult() {
    if (userChoice === computerChoice) {
      setResult("비겼습니다😗");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      setResult("이겼습니다😀");
    } else {
      setResult("졌습니다🥲");
    }
  }

  // 결과 화면을 보여주는 컴포넌트
  //  컴포넌트 안에 다른 컴포넌트를 포함시킬 수 있음!
  function Result() {
    return (
      <div>
        {result}
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => handleUserChoice("rock")}>
        <img src={rock} alt="Rock" />
      </button>
      <button onClick={() => handleUserChoice("scissors")}>
        <img src={scissors} alt="Scissors" />
      </button>
      <button onClick={() => handleUserChoice("paper")}>
        <img src={paper} alt="Paper" />
      </button>
      {userChoice !== "" && computerChoice !== "" && <Result />}
    </div>
  );
}
