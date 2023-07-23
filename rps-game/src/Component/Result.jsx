import ChoiceImage from "./ChoiceImage";
import ResultInfo from "./ResultInfo";

// 결과 화면을 보여주는 컴포넌트
// 컴포넌트 안에 다른 컴포넌트를 포함시킬 수 있다!(Game > Result > (ChoiceImage, ResultInfo))
function Result({
  result,
  setResult,
  userChoice,
  setUserChoice,
  computerChoice,
  setComputerChoice,
}) {
  const handlePlayAgain = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div>
      <div className="choices">
        <div className="choice">
          <p>YOU</p>
          <ChoiceImage choice={userChoice} />
        </div>
        <div className="choice">
          <p>COMPUTER</p>
          <ChoiceImage choice={computerChoice} />
        </div>
      </div>
      <ResultInfo result={result} />
      <button onClick={handlePlayAgain} style={{ marginTop: "20px" }}>
        Play Again!
      </button>
    </div>
  );
}

export default Result;
