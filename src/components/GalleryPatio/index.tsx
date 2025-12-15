import { useState, useEffect, useCallback } from "react";
import "./styles.css";
import nextbutton from "../../assets/next.png";
import prevbutton from "../../assets/prev.png";
import closebutton from "../../assets/close.png";

const imagens = [
  "/imgs/patio1.jpeg",
  "/imgs/patio2.jpg",
  "/imgs/patio3.jpeg",
  "/imgs/patio4.jpeg",
  "/imgs/patio5.jpg",
  "/imgs/patio6.jpeg",
];

export default function GalleryPatio() {
  const [indexAtual, setIndexAtual] = useState<number | null>(null);

  const primeiras4 = imagens.slice(0, 4);
  const restantes = imagens.length - 4;

  const proxima = useCallback(() => {
    setIndexAtual((prev) =>
      prev === null ? prev : (prev + 1) % imagens.length
    );
  }, []);

  const anterior = useCallback(() => {
    setIndexAtual((prev) =>
      prev === null ? prev : prev === 0 ? imagens.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    if (indexAtual === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") proxima();
      if (event.key === "ArrowLeft") anterior();
      if (event.key === "Escape") setIndexAtual(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [indexAtual, proxima, anterior]);

  return (
    <>
      <div className="galeria-grid">
        <div className="foto-grande" onClick={() => setIndexAtual(0)}>
          <img src={primeiras4[0]} alt="Foto principal" />
        </div>

        <div className="mini-grid">
          {primeiras4.slice(1).map((img, i) => (
            <div
              key={i}
              className="mini-foto"
              onClick={() => setIndexAtual(i + 1)}
            >
              <img src={img} alt={`Miniatura ${i + 1}`} />
            </div>
          ))}

          <div
            className="mini-foto overlay-full"
            onClick={() => setIndexAtual(4)}
          >
            <img src={imagens[4]} className="blur-img" />
            <span className="overlay-text">+{restantes}</span>
          </div>
        </div>
      </div>

      {indexAtual !== null && (
        <div className="lightbox">
          <button className="nav-prev" onClick={anterior}>
            <img src={prevbutton} alt="Anterior" />
          </button>

          <img
            src={imagens[indexAtual]}
            className="lightbox-img"
            alt="Imagem ampliada"
          />

          <button className="nav-next" onClick={proxima}>
            <img src={nextbutton} alt="Próxima" />
          </button>

          <span className="close" onClick={() => setIndexAtual(null)}>
            <img src={closebutton} alt="Fechar" />
          </span>
        </div>
      )}
    </>
  );
}
