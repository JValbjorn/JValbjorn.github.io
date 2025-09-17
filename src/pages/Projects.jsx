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
          headerText="PROJECTS"
          text="Here’s a selection of my projects, where I’ve combined design and code to create functional and engaging digital solutions."
          imageUrl="../img/heropage/projects-profile-img.png"
        />
      </div>
      <section>
        <h2>view my projects</h2>
        <LeftProjectCard />
        <RightProjectCard />
        <LeftProjectCard />
        <RightProjectCard />
        <div className="left-project-card">
          <img src="" alt="" />
          <h2>more projects comming soon</h2>
          <img src="" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}
