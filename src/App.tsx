import "./App.css"
import { Routes, Route, Outlet } from 'react-router-dom'
import Footer from "./components/Footer";
import GalleryPatio from "./components/GalleryPatio";
import Header from "./components/Header";
import TabsEspaco from "./components/TabsEspaco";
import MapUcdb from "./components/MapUcdb";
import SobreEspaco from "./routes/SpacePatioPage/sobreEspaco";
import Politica from "./routes/SpacePatioPage/politica";
import Home from "./routes/Home";
import ComodidadesPatio from "./components/ComodidadesPatio";



function SpacePatioLayout() {
  return (
    <div className="app-container">
      <Header />
      <GalleryPatio />
      <TabsEspaco />

      {/* 👇 Comodidades fixas */}
      <ComodidadesPatio />

      <div className="conteudo-tabs">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<SpacePatioLayout />}>
        <Route index element={<MapUcdb />} />
        <Route path="endereco" element={<MapUcdb />} />
        <Route path="sobre" element={<SobreEspaco />} />
        <Route path="politica" element={<Politica />} />
      </Route>
    </Routes>
  );
}

 
