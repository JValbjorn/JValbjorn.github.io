import { Link } from "react-router";

export default function LeftProjectCard({
  imageUrl,
  header,
  body,
  projectLink,
}) {
  return (
    <section >
      <h3>{header}</h3>
      <p>{body}</p>
      <Link to={projectLink}>More details</Link>
      <img src={imageUrl} alt="" />
    </section>
  );
}
