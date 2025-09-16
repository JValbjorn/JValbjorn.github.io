import { NavLink } from "react-router";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  return (
    <div className="navigation">
      <img src="../../public/img/logo/logo-valbjorn.png" alt="" />
      <div className="nav-links">
        <nav>
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/project">PROJECTS</NavLink>
          <NavLink to="/about">ABOUT ME</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <LanguageSelector />
          </nav>
        
      </div>
    </div>
  );
}
