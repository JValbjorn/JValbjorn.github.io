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
          alt=""
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
          <a href="">
            <img
              className="social-links"
              src="../../public/img/logo/facebook.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="social-links"
              src="../../public/img/logo/instagram.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="social-links"
              src="../../public/img/logo/linkedin.png"
              alt=""
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
