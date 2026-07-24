import "./App.css";
import Article from "./components/Article"
import articleImg from './img/article.jpg'

function App() {
  const articles = [
    {
      id: 1,
      url: "https://v.daum.net/v/20260719141609940",
      image: articleImg,
      title: "열리지 말았어야 할 경기 였다.",
      description: "스타 뉴스 - 7시간 전"
    },
    {
      id: 2,
      url: "https://v.daum.net/v/20260719141609941",
      image: articleImg,
      title: "두 번째 기사 제목입니다",
      description: "스포츠 뉴스 - 3시간 전"
    },
    {
      id: 3,
      url: "https://v.daum.net/v/20260719141609942",
      image: articleImg,
      title: "세 번째 기사 제목입니다",
      description: "연예 뉴스 - 1시간 전"
    }
  ];

  return (
    <>
      <main>
        <div className="card">
          <div className="card__header">이 시각 추천 뉴스</div>
          <div className="card__body">
            <div className="courses">
              
              {articles.map(item => (
                <Article key={item.id} {...item} />
              ))}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
