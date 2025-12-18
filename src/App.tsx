import { Routes, Route } from "react-router-dom";
import SobreEspaco from "./routes/SpacePatioPage/sobreEspaco";
import Politica from "./routes/SpacePatioPage/politica";
import Home from "./routes/Home";
import SpacePatioPage from "./routes/SpacePatioPage";
import Adm from "./routes/Adm";
import MapUcdbPatio from "./routes/SpacePatioPage/MapUcdbPatio";

export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/espaco" element={<SpacePatioPage />}>                                             
        <Route index element={<MapUcdbPatio />} />
        <Route path="endereco" element={<MapUcdbPatio />} />
        <Route path="sobre" element={<SobreEspaco />} />
        <Route path="politica" element={<Politica />} />
      </Route>

      <Route path="/administrador" element={<Adm />} />
    </Routes>
  );
}
