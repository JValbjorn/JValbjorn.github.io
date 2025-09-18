import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="header linebreaks">
        <HeroCom
          enableButton={true}
          headerText={t("HomeHeader")}
          text= {t("HomeTeaser")} 
          imageUrl="../img/heropage/home-profile-img.png"
          buttonText={t("InTouch")}
          linkDestination="/Contact"
        />
      </div>
      <div className="background-content">
        <section className="content">
          <div className="img-container">
            <img
              className="bh"
              src="../../public/img/blue-img/formed-images-bh.png"
              alt=""
            />
          </div>
          <div className="text-container">
            <h2>{t("ThiIs")}</h2>
            <div className="text-content linebreaks">
              <p>
                {t("ThisIsText")}
              </p>
              <Link to="/about">{t("MoreDetails")}</Link>
            </div>
          </div>
        </section>

        <section className="skill-content ">
          <div className="skills-header">
            <h2>{t("Toolbox")}</h2>
          </div>

          <div className=" skill-container">
            <img
              className="rips top"
              src="../../public/img/rips/top-rip.png"
              alt=""
            />
            <div className="skill-scroll">
              <div className=" marquee-container">
                <div className="marquee">
                  <div className="skill">
                    <img src="../../public/img/skills/html5.svg" alt="" />
                    <p>HTML5</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ae.png" alt="" />
                    <p>AFTEREFFECTS</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/css.svg" alt="" />
                    <p>CCS</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/dn.png" alt="" />
                    <p>DIMENSION</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/figma.svg" alt="" />
                    <p>FIGMA</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ai.png" alt="" />
                    <p>ILLUSTRATOR</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/github.svg" alt="" />
                    <p>GITHUB</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ps.png" alt="" />
                    <p>PHOTOSHOP</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/js.svg" alt="" />
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ts.png" alt="" />
                    <p>TYPESCRIPT</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/react.svg" alt="" />
                    <p>REACT</p>
                  </div>
                </div>

                <div className="marquee">
                  <div className="skill">
                    <img src="../../public/img/skills/html5.svg" alt="" />
                    <p>HTML5</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ae.png" alt="" />
                    <p>AFTEREFFECTS</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/css.svg" alt="" />
                    <p>CCS</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/dn.png" alt="" />
                    <p>DIMENSION</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/figma.svg" alt="" />
                    <p>FIGMA</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ai.png" alt="" />
                    <p>ILLUSTRATOR</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/github.svg" alt="" />
                    <p>GITHUB</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ps.png" alt="" />
                    <p>PHOTOSHOP</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/js.svg" alt="" />
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/ts.png" alt="" />
                    <p>TYPESCRIPT</p>
                  </div>
                  <div className="skill">
                    <img src="../../public/img/skills/react.svg" alt="" />
                    <p>REACT</p>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="rips bottom"
              src="../../public/img/rips/bottom-rip.png"
              alt=""
            />
          </div>
          <Link className="btn" to="/about">
            {t("AllSkils")}
          </Link>
        </section>

        <section className="content-project">
          <h2>{t("WorkingOn")}</h2>
          <div className="project-content">
            <div className="project-teaser">
              <Link to="/project/0">
                <img className="project-img" src="../../public/img/projects/coilbot.png" alt="screenshot of coilbot" />
              </Link>
              <p>{t("Coilbot")}</p>
            </div>
            <div className="project-teaser">
              <Link to="/project/1">
                <img className="project-img"
                  src="../../public/img/projects/moderkagens-mission.png"
                  alt="screenshot of Moderkagens Mission"
                />
              </Link>
              <p>{t("ModerkagensMissionTitle")}</p>
            </div>
            <div className="project-teaser">
              <Link to="/project/2">
                <img
                className="project-img"
                  src="../../public/img/projects/zero-buzz-brew.png"
                  alt="screenshot of Zero buzz brew"
                />
              </Link>

              <p>{t("ZeroBuzzBrewTitle")}</p>
            </div>
          </div>
          <Link className="btn" to="/project">
           {t("AllProjects")}
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
