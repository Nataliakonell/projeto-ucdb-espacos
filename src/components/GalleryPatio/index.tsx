import { useState } from "react";
import "./styles.css";

const imagens = [
  "/imgs/patio1.jpeg",
  "/imgs/patio2.jpg",
  "/imgs/patio3.jpeg",
  "/imgs/patio4.jpeg",
  "/imgs/patio5.jpg",
  "/imgs/patio6.jpeg",
];

export default function GalleryPatio() {
  const [fotoSelecionada, setFotoSelecionada] = useState<string | null>(null);

  const primeiras4 = imagens.slice(0, 4);
  const restantes = imagens.length - 4;

  return (
    <>
      <div className="galeria-grid">
        
        <div
          className="foto-grande"
          onClick={() => setFotoSelecionada(primeiras4[0])}
        >
          <img src={primeiras4[0]} alt="foto-principal" />
        </div>

        
        <div className="mini-grid">
          
          <div
            className="mini-foto"
            onClick={() => setFotoSelecionada(primeiras4[1])}
          >
            <img src={primeiras4[1]} />
          </div>

          
          <div
            className="mini-foto"
            onClick={() => setFotoSelecionada(primeiras4[2])}
          >
            <img src={primeiras4[2]} />
          </div>

        <div
            className="mini-foto"
            onClick={() => setFotoSelecionada(primeiras4[3])}
          >
            <img src={primeiras4[3]} />
          </div>

          {/* Foto 4 com overlay */}
          <div
            className="mini-foto overlay-full"
            onClick={() => setFotoSelecionada(imagens[4])}
          >
            <img src={imagens[4]} className="blur-img" />
            <span className="overlay-text">+{restantes}</span>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {fotoSelecionada && (
        <div className="lightbox" onClick={() => setFotoSelecionada(null)}>
          <img src={fotoSelecionada} className="lightbox-img" />
        </div>
      )}
              

    </>
  );
}
