import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function RightProjectCard({
  imageUrl,
  header,
  body,
  projectLink,
}) {

  const { t } = useTranslation();

  return (
    <section className="right-project-card">
      
        <img
          className="rips top"
          src="../../img/rips/rips-top-blue.png"
          alt="riped paper top"
        />
        <div className="card">
        <img src={imageUrl} alt="" />
        <div className="project-card-text">
          <h3>{header}</h3>
          <p>{body}</p>
          <Link to={projectLink}>{t("MoreDetails")}</Link>
        </div>
      </div>
      <img
        className="rips bottom"
        src="../../img/rips/rips-bottom-blue.png"
        alt="riped paper bottom"
      />
    </section>
  );
}
