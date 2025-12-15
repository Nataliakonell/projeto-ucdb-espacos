import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SpacePatioPage from './SpacePatioPage';
import MapUcdb from '../components/MapUcdb';
import SobreEspaco from './SpacePatioPage/sobreEspaco';
import Politica from './SpacePatioPage/politica';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patio" element={<SpacePatioPage />}>
        <Route index element={<MapUcdb />} />
        <Route path="endereco" element={<MapUcdb />} />
        <Route path="sobre" element={<SobreEspaco />} />
        <Route path="politica" element={<Politica />} />
      </Route>
    </Routes>
  );
}
