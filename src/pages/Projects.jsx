import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroCom
        headerText="PROJECTS"
        text="Here’s a selection of my projects, where I’ve combined design and code to create functional and engaging digital solutions."
        imageUrl="../img/heropage/projects-profile-img.png"
      />
    </div>
  );
}
