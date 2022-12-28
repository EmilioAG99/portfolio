import "./portfolio.css";
import data from "../Data/data.json";
import SingleProject from "./SingleProject";
import backend from "../Assets/backend.png";
import compiler from "../Assets/compilador.png";
import detection from "../Assets/detection.png";
import graficas from "../Assets/graficas.png";
import swift from "../Assets/iosApp.png";
import cinematec from "../Assets/cinematec.png";
import valorApp from "../Assets/ValorApp.png";
function Portfolio() {
  const images = [
    backend,
    compiler,
    detection,
    graficas,
    swift,
    cinematec,
    valorApp,
  ];
  const generateProjects = () => {
    return data.projects.map((project, index) => {
      return (
        <SingleProject information={project}>
          <img src={images[index]} alt="project" />
        </SingleProject>
      );
    });
  };
  return (
    <section id="portfolio">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">{generateProjects()}</div>
    </section>
  );
}
export default Portfolio;
