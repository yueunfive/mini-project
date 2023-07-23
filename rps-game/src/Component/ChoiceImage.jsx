import rock from "../img/rock.png";
import scissors from "../img/scissors.png";
import paper from "../img/paper.png";
import tube from "../img/tube.jpeg";

// 선택된 가위, 바위, 보 이미지를 렌더링하는 컴포넌트
function ChoiceImage({ choice }) {
  const IMAGES = {
    rock,
    scissors,
    paper,
  };
  if (choice === "") {
    return <img src={tube} />;
  }
  return <img src={IMAGES[choice]} alt={choice} />;
}

export default ChoiceImage;

// IMAGES 객체는 다음과 같은 형태로 저장된다.
// IMAGES = {
//   rock: rock,
//   scissors: scissors,
//   paper: paper,
// };
