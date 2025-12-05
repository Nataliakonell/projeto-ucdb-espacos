import { useState } from "react";
import "./styles.css";
import MapUcdb from "../MapUcdb";

export default function TabsEspaco() {
  const [aba, setAba] = useState<"endereco" | "sobre" | "politica">("endereco");

  return (
    <>
      {/* ABAS */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${aba === "endereco" ? "active" : ""}`}
          onClick={() => setAba("endereco")}
        >
          Endereço
        </button>

        <button
          className={`tab-btn ${aba === "sobre" ? "active" : ""}`}
          onClick={() => setAba("sobre")}
        >
          Sobre espaço
        </button>

        <button
          className={`tab-btn ${aba === "politica" ? "active" : ""}`}
          onClick={() => setAba("politica")}
        >
          Política
        </button>
      </div>

      {/* CONTEÚDO DAS ABAS */}
      <div className="conteudo-tabs">
        {aba === "endereco" && <MapUcdb />}
      </div>
    </>
  );
}
