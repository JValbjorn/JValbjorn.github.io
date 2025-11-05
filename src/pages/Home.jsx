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
          text={t("HomeTeaser")}
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
              src="../../img/blue-img/formed-images-bh.png"
              alt="Julie Valbjørn photo taken from Daniel Valbjørn"
            />
          </div>
          <div className="text-container">
            <h2>{t("ThiIs")}</h2>
            <div className="text-content linebreaks">
              <p>{t("ThisIsText")}</p>
              <Link to="/about">{t("MoreDetails")}</Link>
            </div>
          </div>
        </section>

        <section className="skill-content ">
          <div className="skills-header">
            <h2>{t("Toolbox")}</h2>
          </div>

          <div className=" skill-container">
            <img className="rips top" src="../../img/rips/top-rip.png" alt="" />
            <div className="skill-scroll">
              <section className=" marquee-container">
                <div className="marquee">
                  <article className="nowrap">
                    <div className="skill">
                      <img src="../../img/skills/html5.svg" alt="HTML5" />
                      <p>HTML5</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/ae.png"
                        alt="Adobe Aftereffects"
                      />
                      <p>AFTEREFFECTS</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/css.svg" alt="CSS3" />
                      <p>CCS</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/dn.png"
                        alt="Adobe Dimension"
                      />
                      <p>DIMENSION</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/figma.svg" alt="Figma" />
                      <p>FIGMA</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/ai.png"
                        alt="Adobe Illustrator"
                      />
                      <p>ILLUSTRATOR</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/github.svg" alt="Github" />
                      <p>GITHUB</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/ps.png"
                        alt="Adobe Photoshop"
                      />
                      <p>PHOTOSHOP</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/js.svg" alt="JavaScript" />
                      <p>JAVASCRIPT</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/ts.png" alt="Typescript" />
                      <p>TYPESCRIPT</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/react.svg" alt="React" />
                      <p>REACT</p>
                    </div>
                  </article>

                  <article className="nowrap">
                    <div className="skill">
                      <img src="../../img/skills/html5.svg" alt="HTML5" />
                      <p>HTML5</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/ae.png"
                        alt="Adobe Aftereffects"
                      />
                      <p>AFTEREFFECTS</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/css.svg" alt="CSS3" />
                      <p>CCS</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/dn.png"
                        alt="Adobe Dimension"
                      />
                      <p>DIMENSION</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/figma.svg" alt="Figma" />
                      <p>FIGMA</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/ai.png"
                        alt="Adobe Illustrator"
                      />
                      <p>ILLUSTRATOR</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/github.svg" alt="Github" />
                      <p>GITHUB</p>
                    </div>
                    <div className="skill">
                      <img
                        src="../../img/skills/ps.png"
                        alt="Adobe Photoshop"
                      />
                      <p>PHOTOSHOP</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/js.svg" alt="JavaScript" />
                      <p>JAVASCRIPT</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/ts.png" alt="Typescript" />
                      <p>TYPESCRIPT</p>
                    </div>
                    <div className="skill">
                      <img src="../../img/skills/react.svg" alt="React" />
                      <p>REACT</p>
                    </div>
                  </article>
                </div>
              </section>
            </div>

            <img
              className="rips bottom"
              src="../../img/rips/bottom-rip.png"
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
                <img
                  className="project-img"
                  src="../../img/projects/coilbot.png"
                  alt="screenshot of coilbot"
                />
              </Link>
              <p>{t("Coilbot")}</p>
            </div>
            <div className="project-teaser">
              <Link to="/project/1">
                <img
                  className="project-img"
                  src="../../img/projects/moderkagens-mission.png"
                  alt="screenshot of Moderkagens Mission"
                />
              </Link>
              <p>{t("ModerkagensMissionTitle")}</p>
            </div>
            <div className="project-teaser">
              <Link to="/project/2">
                <img
                  className="project-img"
                  src="../../img/projects/zero-buzz-brew.png"
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
