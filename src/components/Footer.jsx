import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
const {t} = useTranslation();

  return (
    <footer>
      <div className="flower-container">
        <img
          className="flower"
          src="../../public/img/doodles/flower-doodle.png"
          alt="doodled flower"
        />
      </div>
      <article className="">
        <h3 className="linebreaks">
          {t("Footer")} <Link to="/contact">{t("FooterLink")}</Link>
        </h3>
        <a className="mail linebreaks" href="mailto:Julievalbjorn@live.dk">Julievalbjorn@live.dk</a>
      </article>

      <article className="rights">
        <div className="social-links">
          <a href="https://www.facebook.com/julievalbjorn/">
            <img
              className="social-links"
              src="../../public/img/logo/facebook.png"
              alt="doodled Facebook icon"
            />
          </a>
          <a href="https://www.instagram.com/_valbjorn_/">
            <img
              className="social-links"
              src="../../public/img/logo/instagram.png"
              alt="doodled Instergram icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/julie-v-15973b127/">
            <img
              className="social-links"
              src="../../public/img/logo/linkedin.png"
              alt="doodled Linkedin icon"
            />
          </a>
        </div>
        <p>
          {t("Rights")}
        </p>
      </article>
    </footer>
  );
}
