import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 아이디, 비밀번호 4자 미만 삽입시 경고
  const wordCondition = () => {
    if (id.length < 4 || pw.length < 4) {
      alert("4자 이상 입력하세요!");
      return false;
    }
    return true;
  };

  const goLogin = () => {
    alert("회원가입 완료! 다시 로그인해주세요🙂");
    navigate("/");
  };

  return (
    <div className="SignUp">
      <h2 className="title">회원가입</h2>
      <div className="input_box">
        <div className="id_box">
          <h4>아이디</h4>
          <input
            className="ID"
            type="email"
            placeholder="4자 이상 입력하세요"
            value={id} // id 값 업데이트
            onChange={(e) => setId(e.target.value)} // id 값을 변경할 때마다 업데이트
          />
        </div>
        <div className="pw_box">
          <h4>비밀번호</h4>
          <input
            className="PW"
            type="password"
            placeholder="4자 이상 입력하세요"
            value={pw} // pw 값 업데이트
            onChange={(e) => setPw(e.target.value)} // pw 값을 변경할 때마다 업데이트
          />
        </div>
        <button onClick={() => wordCondition() && goLogin()}>가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;
