import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <ul className="lists">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <div className="socials">
        <a
          href="https://github.com/EmilioAG99"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-emilio-alc%C3%A1ntara-guzm%C3%A1n-4a03291b9/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
