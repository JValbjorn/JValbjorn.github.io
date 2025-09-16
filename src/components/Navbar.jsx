import { NavLink } from "react-router";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  return (
    <>
    <img src="../../public/img/logo/logo-valbjorn.png" alt="" />
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    <LanguageSelector />
    </>
  );
}
