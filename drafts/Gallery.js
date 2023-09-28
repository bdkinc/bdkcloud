import Image from "next/image";

const Gallery = ({ images }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {images.map((src) => (
      <div key={src}>
        {<Image src={require("../public" + src)}/>}
      </div>
    ))}
  </div>
);

export default Gallery;
