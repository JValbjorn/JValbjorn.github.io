import { useTranslation } from "react-i18next";
import HeroCom from "../components/HeroCom";
import Footer from "../components/Footer";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <HeroCom
          headerText="GET TO KNOW ME!"
          text="Keep reading to find out who I am, how I work, what I’m good at – and what keeps me busy when I’m not coding."
          imageUrl="../img/heropage/about-me-profile-img.png"
        />
      </div>

      <section>
        <h2>a bit about me</h2>
        <p>
          My name is Julie Valbjørn, I’m 22 years old and based in Aarhus, where
          I study Multimedia Design with a focus on frontend development.
        </p>
        <p>
          I love combining creativity with structure – bringing design and code
          together in ways that both work seamlessly and inspire visually.
        </p>
        <p>
          I’m known for being reliable, collaborative, and helpful, and I thrive
          in team settings where ideas can be shared and developed.{" "}
        </p>
        <p>
          At the same time, I’m both practical and enthusiastic, which means I
          approach challenges with energy while staying focused on finding the
          best solutions in practice.
        </p>
        <img src="" alt="" />
      </section>
      <section>
        <h2>my toolbox</h2>
        <img src="" alt="" />
        /////////
        <img src="" alt="" />
      </section>
      <section>
        <h2>life beyond the screen</h2>
        <img src="" alt="" />
        <p>
          Beyond my studies, I’m passionate about dance. I not only enjoy Swing
          & Rock’n’Roll and West Coast Swing, but I also teach dance classes,
          which has given me valuable experience in communicating clearly,
          instructing, and standing confidently in front of larger groups.
        </p>
        <h3>
          I aspire to join company where I can contribute my skills, spread
          positive energy, and continue to grow professionally.
        </h3>
      </section>
      <Footer />
    </>
  );
}
