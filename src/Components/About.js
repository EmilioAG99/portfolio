import "./About.css";
import Card from "./Card";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import me from "../Assets/me2.png";
function About() {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <Card title="Experience" desc="1 Year">
              <FaAward className="about__icon" />
            </Card>
            <Card title="Projects" desc="10 completed projects">
              <VscFolderLibrary className="about__icon" />
            </Card>
          </div>
          <p>
            {" "}
            Computer Science student interested in consulting and software
            development area. My main focus is to generate innovative solutions,
            and develop new skills through communication and team work.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
