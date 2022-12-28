import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/luis-emilio-alc%C3%A1ntara-guzm%C3%A1n-4a03291b9/"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/EmilioAG99"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
}
export default HeaderSocials;
