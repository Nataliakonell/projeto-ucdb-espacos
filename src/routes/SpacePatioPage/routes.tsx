import { Routes, Route } from "react-router-dom";
import MapUcdb from "../../components/MapUcdb";
import SobreEspaco from "./sobreEspaco";
import Politica from "./politica";

export default function SpacePatioPageRoutes() {
  return (
    <Routes>
      <Route index element={<MapUcdb />} />
      <Route path="endereco" element={<MapUcdb />} />
      <Route path="sobre" element={<SobreEspaco />} />
      <Route path="politica" element={<Politica />} />
    </Routes>
  );
}
