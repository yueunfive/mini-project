import rock from "../img/rock.png";
import scissors from "../img/scissors.png";
import paper from "../img/paper.png";
import tube from "../img/tube.png";

// 선택된 가위, 바위, 보 이미지를 렌더링하는 컴포넌트
// property shorthand(단축 속성명) 활용
// choice : "rock" || "scissors" || "paper"
// 따옴표가 붙은 문자열로 렌더링 되어있으니 객체를 활용해서 변수로 바꿔주는 절차가 필요하다!
function ChoiceImage({ choice }) {
  const IMAGES = {
    rock,
    scissors,
    paper,
  };
  if (choice === "") {
    return <img src={tube} alt="Waiting for user choice" />;
  }
  return <img src={IMAGES[choice]} alt={choice} />;
}

export default ChoiceImage;
