import "./singleProject.css";
function SingleProject({ children, information }) {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">{children}</div>
      <h3>{information.title}</h3>
      <a
        href={information.url}
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </article>
  );
}

export default SingleProject;
