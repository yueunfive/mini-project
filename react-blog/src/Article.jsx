import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 오류:", error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/articles/${id}`)
      .then(() => {
        alert("삭제 완료 🗑️");
        navigate("/");
      })
      .catch((error) => {
        console.error("삭제 오류:", error);
      });
  };

  return (
    <div>
      <div className="p-5 mb-5 text-center bg-light">
        <h1 className="mb-3" onClick={() => navigate(`/`)}>
          📝 게시판 프로젝트
        </h1>
        <h4 className="mb-3">(with JS, React, Java, Spring, MySQL)</h4>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <article>
              <input type="hidden" id="article-id" value={article.id} />
              <header className="mb-4">
                <h1 className="fw-bolder mb-1">{article.title}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted on {new Date(article.createdAt).toLocaleString()}
                </div>
              </header>
              <section className="mb-5">
                <p className="fs-5 mb-4">{article.content}</p>
              </section>
              <button
                type="button"
                id="modify-btn"
                onClick={() => navigate(`/new-articles/${article.id}`)}
                className="btn btn-primary btn-sm custom-margin"
              >
                수정
              </button>
              <button
                type="button"
                id="delete-btn"
                onClick={handleDelete}
                className="btn btn-secondary btn-sm"
              >
                삭제
              </button>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
