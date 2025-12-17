import Header from "../../components/Header";
import GalleryPatio from "../../components/GalleryPatio";
import TabsEspaco from "../../components/TabsEspaco";
import Footer from "../../components/Footer";

import Comodidades from "../../components/Comodidades";
import type { Comodidade } from "../../components/Comodidades";

import arIcon from "../../assets/arcondicionado.png";
import wifiIcon from "../../assets/wifi.png";
import palcoIcon from "../../assets/palco.png";
import camarimIcon from "../../assets/camarim.png";
import banheiroIcon from "../../assets/banheiro.png";
import cozinhaIcon from "../../assets/cozinha.png";
import elevadorIcon from "../../assets/elevador.png";

import { Outlet } from "react-router-dom";

export default function SpacePatioPage() {
  const comodidades: Comodidade[] = [
    {
      id: 1,
      label: "Ar condicionado",
      icon: arIcon
    },
    {
      id: 2,
      label: "Wi-fi",
      icon: wifiIcon
    },
    {
      id: 3,
      label: "Palco equipado",
      icon: palcoIcon
    },
    {
      id: 4,
      label: "Camarim de 20m²",
      icon: camarimIcon
    },
    {
      id: 5,
      label: "Banheiros",
      icon: banheiroIcon
    },
    {
      id: 6,
      label: "Cozinhas completas",
      icon: cozinhaIcon
    },
    {
      id: 8,
      label: "Elevador",
      icon: elevadorIcon
    },
  ];

  return (
    <>
      <Header />
      <GalleryPatio />
      <TabsEspaco />

      <Comodidades comodidades={comodidades} />
      
      <div className="conteudo-tabs">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

/*function SpacePatioLayout() {
  return (
    <div className="app-container">
      <Header />
      <GalleryPatio />
      <TabsEspaco />

      <ComodidadesPatio />

      <div className="conteudo-tabs">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}*/