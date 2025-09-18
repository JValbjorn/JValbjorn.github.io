import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const {t} = useTranslation();

  return (
    <>
      <Navbar />

      <div className="blue-background">
        <div className="half-cirkel">
          <h1>{t("InTouch")}</h1>
          <div className="contact-content linebreaks">
            <h3>
              {t("ContactText")}
            </h3>
            <div className="contact-split">
            <a className="mail" href="mailto:Julievalbjorn@live.dk">Julievalbjorn@live.dk</a>
            <h3>+45 22 85 95 44</h3>
            </div>
            <img className="doodle d2" src="../../public/img/doodles/doodles-star.png" alt="doodle of a star in cowboyboots" />
          </div>
        </div>
      </div>
    </>
  );
}
