import "./card.css";
function Card({ title, desc, children }) {
  return (
    <article className="about__card">
      {children}
      <h5>{title}</h5>
      <small>{desc}</small>
    </article>
  );
}
export default Card;
