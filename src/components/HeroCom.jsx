import Navbar from "./Navbar";
import FrontImage from "./FrontImage";
import { NavLink } from "react-router-dom";

export default function HeroCom({
  headerText,
  text,
  imageUrl,
  enableButton,
  buttonText,
  linkDestination,
}) {
  return (
    <>
      <Navbar />
      
      <div className="doodle">
        <img src="../../public/img/doodles/doodles-disco.png" alt="" />
        <img src="../../public/img/doodles/doodles-pingu.png" alt="" />
        <img src="../../public/img/doodles/doodles-puzzle.png" alt="" />
        <img src="../../public/img/doodles/doodles-shrimp.png" alt="" />
        <img src="../../public/img/doodles/doodles-yarn.png" alt="" />
        <img src="../../public/img/doodles/doodles-cheers.png" alt="" />
        <img src="../../public/img/doodles/doodles-hanger.png" alt="" />
        <img src="../../public/img/doodles/doodles-duck.png" alt="" />
      </div>

      <section className="header-container">
        
        <FrontImage imageUrl={imageUrl} />
        <article>
          <h1>{headerText}</h1>
          <p>{text}</p>
          <div className="button-container">
            {enableButton && (
              <NavLink to={linkDestination}>
                <button>{buttonText}</button>
              </NavLink>
            )}
          </div>
        </article>
      </section>
    </>
  );
}
