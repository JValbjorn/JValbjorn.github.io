import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="flower-container">
        <img
          className="flower"
          src="../../public/img/doodles/flower-doodle.png"
          alt=""
        />
      </div>
      <article className="">
        <h3>
          I want to hear from you <br />
          Please <Link to="/contact">contact me!</Link>
        </h3>
        <p>Julievalbjorn@live.dk</p>
      </article>

      <article className="rights">
        <div className="social-links">
          <a href="">
            {" "}
            <img
              className="social-links"
              src="../../public/img/logo/facebook.png"
              alt=""
            />
          </a>
          <a href="">
            {" "}
            <img
              className="social-links"
              src="../../public/img/logo/instagram.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="social-links"
              src="../../public/img/logo/linkedin.png"
              alt=""
            />
          </a>
        </div>
        <p>
          © 2025 by Julie Valbjørn.
          <br />
           All rights reserved.
        </p>
      </article>
    </footer>
  );
}
