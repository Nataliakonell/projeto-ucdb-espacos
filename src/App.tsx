import "./App.css"
import { Routes, Route } from 'react-router-dom'
import MapUcdb from "./components/MapUcdb";
import SobreEspaco from "./routes/SpacePatioPage/sobreEspaco";
import Politica from "./routes/SpacePatioPage/politica";
import Home from "./routes/Home";
import SpacePatioPage from "./routes/SpacePatioPage";
import Adm from "./routes/Adm";





export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="administrador" element={<Adm />} />
      <Route element={<SpacePatioPage />}>
        <Route index element={<MapUcdb />} />
        <Route path="endereco" element={<MapUcdb />} />
        <Route path="sobre" element={<SobreEspaco />} />
        <Route path="politica" element={<Politica />} />
      </Route>
    
      
    </Routes>
  );
}

 
