import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== "0") {
      axios
        .get(`http://localhost:8080/api/articles/${id}`)
        .then((response) => {
          setArticle(response.data);
        })
        .catch((error) => {
          console.error("API 호출 오류:", error);
        });
    }
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const handleSubmit = () => {
    if (id !== "0") {
      axios
        .put(`http://localhost:8080/api/articles/${id}`, article)
        .then((response) => {
          alert("글이 수정되었습니다.");
          navigate("/");
        })
        .catch((error) => {
          console.error("수정 오류:", error);
        });
    } else {
      axios
        .post("http://localhost:8080/api/articles", article)
        .then((response) => {
          alert("새로운 글이 등록되었습니다.");
          navigate("/");
        })
        .catch((error) => {
          console.error("등록 오류:", error);
        });
    }
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
              <header className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="제목"
                  name="title"
                  value={article.title}
                  onChange={handleInputChange}
                />
              </header>
              <section className="mb-5">
                <textarea
                  className="form-control h-25"
                  rows="10"
                  placeholder="내용"
                  name="content"
                  value={article.content}
                  onChange={handleInputChange}
                ></textarea>
              </section>
              <button
                type="button"
                id="create-btn"
                onClick={handleSubmit}
                className="btn btn-primary btn-sm"
              >
                {id !== "0" ? "수정" : "등록"}
              </button>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
