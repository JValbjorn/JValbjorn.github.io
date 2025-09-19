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

      <div className="doodles">
        <div className="doodle-wrapper d1">
          <img
            className="doodle"
            src="../../img/doodles/doodles-disco.png"
            alt="doodle of a disco ball"
          />
        </div>
        <div className="doodle-wrapper d2">
          <img
            className="doodle"
            src="../../img/doodles/doodles-pingu.png"
            alt="doodle of a pinguin"
          />
        </div>
        <div className="doodle-wrapper d3">
          <img
            className="doodle"
            src="../../img/doodles/doodles-puzzle.png"
            alt="doodle of puzzlepiecs"
          />
        </div>
        <div className="doodle-wrapper d4">
          <img
            className="doodle"
            src="../../img/doodles/doodles-shrimp.png"
            alt="doodle of happy shrimp"
          />
        </div>
        <div className="doodle-wrapper d5">
          <img
            className="doodle"
            src="../../img/doodles/doodles-yarn.png"
            alt="doodle of yarn and crochet hook"
          />
        </div>
        <div className="doodle-wrapper d6">
          <img
            className="doodle"
            src="../../img/doodles/doodles-cheers.png"
            alt="doodle og a wine bottle and two glasses cheering"
          />
        </div>
        <div className="doodle-wrapper d7">
          <img
            className="doodle"
            src="../../img/doodles/doodles-hanger.png"
            alt="doodle of a clothe hanger"
          />
        </div>
        <div className="doodle-wrapper d8">
          <img
            className="doodle"
            src="../../img/doodles/doodles-duck.png"
            alt="doodle of duck in rainboots"
          />
        </div>
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
