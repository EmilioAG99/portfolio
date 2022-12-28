import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import me from "../Assets/me.png";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Emilio Alcantara</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
}
export default Header;
