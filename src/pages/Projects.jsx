import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";
import Footer from "../components/Footer";
import LeftProjectCard from "../components/LeftProjectCard";
import RightProjectCard from "../components/RightProjectCard";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <HeroCom
          headerText={t("Projects")}
          text={t("ProjectTeaser")}         
          imageUrl="../img/heropage/projects-profile-img.png"
        />
      </div>
      <section>
        <div className="background-content">
          <div className="project-page">
            <div className="skills-header">
              <h2>{t("ViewProjects")}</h2>
            </div>

            <LeftProjectCard
              imageUrl="../img/projects/coilbot.png"
              header={t("CoilbotTitle")}
              body={t("CoilbotTeaser")}
              projectLink="/project/0"
            />
            <RightProjectCard
              imageUrl="../img/projects/moderkagens-mission.png"
              header={t("ModerkagensMissionTitle")}
              body={t("ModerkagensMissionTeaser")}
              projectLink="/project/1"
            />
            <LeftProjectCard className="project-img"
              imageUrl="../img/projects/zero-buzz-brew.png"
              header={t("ZeroBuzzBrewTitle")}
              body={t("ZeroBuzzBrewTeaser")}
              projectLink="/project/2"
            />
            <RightProjectCard
              imageUrl="../img/projects/no-img-yet.png"
              header={t("MusicSyncTitle")}
              body={t("MusicSyncTeaser")}
              projectLink="/project/3"
            />
            <div className="left-project-card">
              <img
                className="rips top"
                src="../../public/img/rips/top-rip.png"
                alt="paper riped top"
              />
              <h2 className="comming-soon">{t("ComingSoon")}</h2>
              <img
                className="rips bottom"
                src="../../public/img/rips/bottom-rip.png"
                alt="paper riped bottom"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
