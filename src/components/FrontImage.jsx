export default function FrontImage({ imageUrl }) {
  return (
    <div className="header-img-container">
      <img className="triangles triangle3" src="../../public/img/heropage/dark-tri2.png" alt="" />
      <img className="triangles triangle2" src="../../public/img/heropage/light-tri2.png" alt="" />
      <img className="triangles triangle1" src={imageUrl} alt="" />
    </div>
  );
}
