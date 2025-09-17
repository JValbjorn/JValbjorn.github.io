import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectDetail({ title, body, imgUrl, githubUrl }) {
  return (
    <>
      <Navbar />
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <img src={imgUrl} alt="" />
        <p>
          Want to review the code on <a href={githubUrl}>Github</a>
        </p>
      </div>
      <Footer />
    </>
  );
}
