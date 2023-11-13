import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./AriticleList";
import Article from "./Article";
import NewArticle from "./NewArticle";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/new-articles/:id" element={<NewArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
