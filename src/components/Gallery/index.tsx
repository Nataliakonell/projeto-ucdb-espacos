import { Gallery } from "react-grid-gallery";

const fotos = [
  {
    src: "/imgs/patio1.jpeg",
    thumbnail: "/imgs/patio1.jpeg",
    width: 1200,
    height: 800,
  },
  {
    src: "/imgs/patio2.jpg",
    thumbnail: "/imgs/patio2.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "/imgs/patio3.jpeg",
    thumbnail: "/imgs/patio3.jpeg",
    width: 1200,
    height: 800,
  },
    {
    src: "/imgs/patio4.jpeg",
    thumbnail: "/imgs/patio4.jpeg",
    width: 1200,
    height: 800,
  },
  {
    src: "/imgs/patio5.jpg",
    thumbnail: "/imgs/patio5.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "/imgs/patio6.jpeg",
    thumbnail: "/imgs/patio6.jpeg",
    width: 1200,
    height: 800,
  }
  
];

export default function GalLeryUCDB() {
  return (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <Gallery
        images={fotos}
        enableImageSelection={false}
        rowHeight={180}
        margin={5}
      />
    </div>
  );
}
