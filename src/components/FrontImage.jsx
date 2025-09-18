export default function FrontImage({ imageUrl }) {
  return (
    <div className="header-img-container">
      <img
        className="triangles triangle3"
        src="../../public/img/heropage/dark-tri2.png"
        alt="dark  blue shape"
      />
      <img
        className="triangles triangle2"
        src="../../public/img/heropage/light-tri2.png"
        alt="light blue shape"
      />
      <img className="triangles triangle1" src={imageUrl} alt="credit to instagram: shoebox.pink" />
    </div>
  );
}
