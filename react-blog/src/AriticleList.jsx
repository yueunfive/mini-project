import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/articles")
      .then((response) => {
        setArticles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 오류:", error);
      });
  }, []);

  return (
    <div>
      <div className="p-5 mb-5 text-center bg-light">
        <h1 className="mb-3" onClick={() => navigate(`/`)}>
          📝 게시판 프로젝트
        </h1>
        <h4 className="mb-3">(with JS, React, Java, Spring, MySQL)</h4>
      </div>

      <div className="container">
        <button
          type="button"
          id="create-btn"
          onClick={() => {
            navigate("/new-articles/0");
          }}
          className="btn btn-secondary btn-sm mb-3"
        >
          글 등록
        </button>
        {articles.map((item) => (
          <div key={item.id} className="card mb-2">
            <div className="card-header">{item.id}</div>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.content}</p>
              <button
                onClick={() => navigate(`/articles/${item.id}`)}
                className="btn btn-primary"
              >
                보러가기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
