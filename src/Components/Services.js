import { BiCheck } from "react-icons/bi";
import "./services.css";
function Services() {
  return (
    <section id="projects">
      <h5>Past Jobs / Experience</h5>
      <h2>Project Development</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Harvestly.co</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Frontend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React Framework</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Custom styling</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Cibruc (social service)</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> VideoGame Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Team Work</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Game mechanics implementation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
export default Services;
