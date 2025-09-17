import Navbar from "./Navbar";
import FrontImage from "./FrontImage";

export default function HeroCom({
  headerText,
  text,
  imageUrl,
  enableButton,
  buttonText,
}) {
  return (
    <>
      <Navbar />
      <section className="header-container">
        <FrontImage imageUrl={imageUrl} />
        <article>
          <h1>{headerText}</h1>
          <p>{text}</p>
          <div className="button-container">
            {enableButton && <button>{buttonText}</button>}
          </div>
        </article>
      </section>
    </>
  );
}
