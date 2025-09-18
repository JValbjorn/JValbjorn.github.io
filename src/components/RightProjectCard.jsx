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
          src="../../public/img/rips/rips-top-blue.png"
          alt=""
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
        src="../../public/img/rips/rips-bottom-blue.png"
        alt=""
      />
    </section>
  );
}
