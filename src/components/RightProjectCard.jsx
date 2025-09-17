import { Link } from "react-router";

export default function RightProjectCard({
  imageUrl,
  header,
  body,
  projectLink,
}) {
  return (
    <section>
      <img src={imageUrl} alt="" />
      <h3>{header}</h3>
      <p>{body}</p>
      <Link to={projectLink}>More details</Link>
    </section>
  );
}
