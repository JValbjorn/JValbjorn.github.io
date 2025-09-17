import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <HeroCom
          enableButton={true}
          headerText={t("FrontPageHeader")}
          text="Hi I’m Julie, I’m a multimedia designer with a knack for bringing pixels to life on the frontend. Scroll down, click around, and check me out."
          imageUrl="../img/heropage/home-profile-img.png"
          buttonText="LET'S GET IN TOUCH!"
        />
      </div>

      <section>
        <h2>this is julie</h2>
        <img src="" alt="" />
        <p>
          Hello are you looking for a frond end dev with a knack for designing?
          - you have come to the right place. I am Julie and i might just be
          what you are looking for. Through my study's i have gained many nice
          tools and skills, but i am always up for learning more.
        </p>
        <Link to="/contact">Wanna know more</Link>
      </section>

      <section>
        <h2>my toolbox</h2>
        <img src="../../public/img/rips/top-rip.png" alt="" />
        {/* loop */}
        <img src="../../public/img/rips/bottom-rip.png" alt="" />
        <button>SEE ALL SKILS</button>
      </section>

      <section>
        <h2>TAKE A LOOK AT WHAT I’VE BEEN WORKING ON!</h2>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <button>SEE ALL PROJECTS</button>
      </section>

      <Footer />
    </>
  );
}
