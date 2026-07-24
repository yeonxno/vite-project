function Article({ url, image, title, description }) {
  return (
    <>
      <article className="course">
        <a href={url}>
          <img className="course__img" src={image} alt={title} />
        </a>
        <div className="course__body">
          <a href={url}>
            <div className="course__title">{title}</div>
          </a>
          <div className="course__description">{description}</div>
        </div>
      </article>
    </>
  );
}

export default Article;
