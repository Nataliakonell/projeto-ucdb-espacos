import Comodidades from "../Comodidades";
import type { Comodidade } from "../Comodidades";

import arIcon from "../../assets/arcondicionado.png";
import wifiIcon from "../../assets/wifi.png";
import palcoIcon from "../../assets/palco.png";
import camarimIcon from "../../assets/camarim.png";
import banheiroIcon from "../../assets/banheiro.png";
import cozinhaIcon from "../../assets/cozinha.png";
import elevadorIcon from "../../assets/elevador.png";

export default function ComodidadesPatio() {
  const comodidades: Comodidade[] = [
    { id: 1, label: "Ar condicionado", icon: arIcon },
    { id: 2, label: "Wi-fi", icon: wifiIcon },
    { id: 3, label: "Palco equipado", icon: palcoIcon },
    { id: 4, label: "Camarim de 20m²", icon: camarimIcon },
    { id: 5, label: "Banheiros", icon: banheiroIcon },
    { id: 6, label: "Cozinhas completas", icon: cozinhaIcon },
    { id: 7, label: "Elevador", icon: elevadorIcon },
  ];

  return <Comodidades comodidades={comodidades} />;
}
