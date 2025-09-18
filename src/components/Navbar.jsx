import { NavLink, Link } from "react-router";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const {t} = useTranslation();

  return (
    <div className="navigation">
      <Link to="/" end><img src="../../public/img/logo/logo-valbjorn.png" alt="logo: <Valbjørn>" /></Link>
      
      <div className="nav-links">
        <nav>
          <NavLink to="/" end>{t("Home")}</NavLink>
          <NavLink to="/project">{t("Projects")}</NavLink>
          <NavLink to="/about">{t("AboutMe")}</NavLink>
          <NavLink to="/contact">{t("Contact")}</NavLink>
          <LanguageSelector />
          </nav>
        
      </div>
    </div>
  );
}
