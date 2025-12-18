import "./styles.css"
import type { Comodidade } from "../../../components/Comodidades";

import arIcon from "../../../assets/arcondicionado.png";
import wifiIcon from "../../../assets/wifi.png";
import palcoIcon from "../../../assets/palco.png";
import camarimIcon from "../../../assets/camarim.png";
import banheiroIcon from "../../../assets/banheiro.png";
import cozinhaIcon from "../../../assets/cozinha.png";
import elevadorIcon from "../../../assets/elevador.png";
import Comodidades from "../../../components/Comodidades";

export default function SobreEspaco() {
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
    
    return(
        <>
         <Comodidades comodidades={comodidades} />
        <div className="sobre-espaco-container">
            <div className="sobre-espaco-title">
            <h2>Sobre o espaço</h2>
            <div className="paragraph-sobre-espaco">
                <p>O espaço aconchegante, com climatização automatizada, contém palco equipado com mesa de som e iluminação cênica – para atender desde um DJ até uma banda musical, conta com dois vídeos walls formado por nove telas de 50 polegadas com tecnologia 4K, camarim de 20 m² para atender cinco pessoas ao mesmo tempo e com banheiros completos, sala ampla para a noiva - com bancada espelhada de 2,5 metros, wi-fi e banheiros, e ainda um lounge externo de 120 m².
O Pátio UCDB oferece estrutura elegante e completa, com duas cozinhas industriais interligadas e equipadas com câmaras frias, freezers, fornos e fogões industriais, além de gás canalizado e acesso direto por rampa. O espaço possui vestiários para equipe, banheiros amplos e acessíveis (masculino, feminino e PCD) e infraestrutura completa de segurança, incluindo saídas de emergência, elevadores, rampas e energia bivolt.
Durante os eventos (até 7 horas), estão disponíveis responsável pelo salão, técnico de som, eletricista e seguranças. O local também conta com a Paróquia Universitária São João Bosco, com capacidade para 800 pessoas, ideal para casamentos.</p>
            </div>
        </div>
        </div>
        
        </>
    );
}

