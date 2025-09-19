export default function FrontImage({ imageUrl }) {
  return (
    <div className="header-img-container">
      <img
        className="triangles triangle3"
        src="../../img/heropage/dark-tri2.png"
        alt="dark  blue shape"
      />
      <img
        className="triangles triangle2"
        src="../../img/heropage/light-tri2.png"
        alt="light blue shape"
      />
      <img className="triangles triangle1" src={imageUrl} alt="credit to instagram: shoebox.pink" />
    </div>
  );
}
