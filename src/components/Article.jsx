import articleImg from '../img/article.jpg'

function Article() {
  return (
    <>
      <article className="course">
        <a href="https://v.daum.net/v/20260719141609940">
          <img className="course__img" src={articleImg} alt="" />
        </a>
        <div className="course__body">
          <a href="https://v.daum.net/v/20260719141609940">
            <div className="course__title">열리지 말았어야 할 경기 였다.</div>
          </a>
          <div className="course__description">스타 뉴스 - 7시간 전</div>
        </div>
      </article>
    </>
  );
}

export default Article;
