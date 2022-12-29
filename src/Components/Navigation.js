import { useState , useEffect} from "react";
import "./navigation.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
function Navigation() {
  const [active, setActive] = useState("#");
  useEffect(()=>{
    const aboutPosition = document.getElementById("about").getBoundingClientRect()
    const experiencePosition = document.getElementById("experience").getBoundingClientRect()
    const projectsPosition = document.getElementById("projects").getBoundingClientRect()
    const portfolioPosition = document.getElementById("portfolio").getBoundingClientRect()
    const contactsPosition = document.getElementById("contact").getBoundingClientRect()
    const checkSection= (e)=>{
      if(window.scrollY > aboutPosition.top -20 && window.scrollY<= aboutPosition.bottom ){
        setActive("#about")
      }
      else if(window.scrollY > experiencePosition.top -10 && window.scrollY<= experiencePosition.bottom ){
        setActive('#experience')
      }
      else if(window.scrollY > projectsPosition.top -10 && window.scrollY<= portfolioPosition.bottom){
        setActive("#projects")
      }
      else if(window.scrollY > contactsPosition.top -20 && window.scrollY<= contactsPosition.bottom){
        setActive("#contact")
      }
      else if(window.scrollY < aboutPosition.top ){
        setActive("#")
      }
    }
    document.addEventListener("scroll", checkSection)

    return (()=>{
      document.removeEventListener("scroll", checkSection)
    })
  },[])
  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("#projects")}
        className={active === "#projects" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}
export default Navigation;
