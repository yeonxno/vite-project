import "./App.css";
import Article from "./components/Article"

function App() {
  return (
    <>
      <main>
        <div className="card">
          <div className="card__header">이 시각 추천 뉴스</div>
          <div className="card__body">
            <div className="courses">
              
              <Article />
              <Article />
              <Article />

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
