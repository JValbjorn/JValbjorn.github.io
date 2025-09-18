import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function LeftProjectCard({
  imageUrl,
  header,
  body,
  projectLink,
}) {

const { t } = useTranslation();

  return (
    <section className="left-project-card">
      <img
        className="rips top"
        src="../../public/img/rips/top-rip.png"
        alt="riped paper top"
      />
      <div className="card">
        <div className="project-card-text">
          <h3>{header}</h3>
          <p>{body}</p>
          <Link to={projectLink}>{t("MoreDetails")}</Link>
        </div>

        <img src={imageUrl} alt="" />
      </div>
      <img
        className="rips bottom"
        src="../../public/img/rips/bottom-rip.png"
        alt="riped paper bottom"
      />
    </section>
  );
}
