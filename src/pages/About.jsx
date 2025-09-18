import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";
import Footer from "../components/Footer";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <HeroCom
          headerText={t("AboutMeHeader")}
          text={t("AboutMeTeaser")}
          imageUrl="../img/heropage/about-me-profile-img.png"
        />
      </div>

      <div className="background-content">
        <section className="about-me-content"> 
          <h2 className="linebreaks">{t("ABitAboutMe")}</h2>
          <div className="text-container">
             <div className="text-content linebreaks">
              <p>
                {t("ABitAboutMeText")}
              </p>
            </div>
        
          <div className="img-container">
            <img
              src="../../public/img/blue-img/formed-images-porto.png"
              alt=""
            />
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
                <div className="still-skills">
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
        </section>
        <section className="skill-content ">
           <div className="skills-header">
             <h2>{t("BeyondScreen")}</h2>
          </div>
         <div className="teaching">

         
          <img src="../../public/img/blue-img/formed-images-teaching.png" alt="" />
          <p className="linebreaks">
            {t("Teaching")}
          </p>
          </div>

          <h3 className="join linebreaks">
            {t("JoinYou")}
          </h3>
          
        </section>
      </div>
      <Footer />
    </>
  );
}
