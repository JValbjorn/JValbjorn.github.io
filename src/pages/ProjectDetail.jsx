import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { getProjectsDataKey } from "../scripts/data";
import { useTranslation } from "react-i18next";

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  const { titleKey, descriptionKey, imageUrl, githubUrl, siteUrl  } =
    getProjectsDataKey(id);

  return (
    <>
      <Navbar />
      <div className="blue-background">
        <div className="half-cirkel">
          <div className="detail-content">
            <div className="text-side">
              <h1 >{t(titleKey)}</h1>
              <p className="linebreaks">{t(descriptionKey)}</p>
            </div>
            <div className="img-side">
            <img className="topic-img" src={imageUrl} alt="" />
            <p>
              {t("SideLink")} <a href={siteUrl}>{t("Project")}</a>
            <br />
              {t("Github")} <a href={githubUrl}>GITHUB</a>
            </p>
            <img src="../../public/img/doodles/doodles-pen.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
