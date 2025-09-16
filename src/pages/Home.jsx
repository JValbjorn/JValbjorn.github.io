import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="header">
      <HeroCom
        enableButton={true}
        headerText={t("FrontPageHeader")}
        text="Hi I’m Julie, I’m a multimedia designer with a knack for bringing pixels to life on the frontend. Scroll down, click around, and check me out."
        imageUrl="../img/heropage/home-profile-img.png"
        buttonText="LET'S GET IN TOUCH!"
      />
    </div>
  );
}
