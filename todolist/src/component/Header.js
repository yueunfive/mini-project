import "./Header.css";

// 날짜를 원하는 형식으로 변환하는 함수
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("ko-KR", options);
};

const Header = ({ date }) => {
  const formattedDate = formatDate(date);

  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{formattedDate}</h1>
    </div>
  );
};
export default Header;
