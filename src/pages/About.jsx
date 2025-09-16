import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroCom
        headerText="GET TO KNOW ME!"
        text="Keep reading to find out who I am, how I work, what I’m good at – and what keeps me busy when I’m not coding."
        imageUrl="../img/heropage/about-me-profile-img.png"
      />
    </div>
  );
}