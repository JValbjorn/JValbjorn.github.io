import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div>
        <h1>get in touch</h1>
        <div>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label for="mail">E-mail:</label>
            <input type="text" id="mail" name="mail" />
            <label for="message">Your message:</label>
            <input type="text" id="message" name="message"/>
            <input type="submit" value="Submit" />
          </form>

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
          <p>Julievalbjorn@live.dk</p>
          <p>+45 22 85 95 44</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
