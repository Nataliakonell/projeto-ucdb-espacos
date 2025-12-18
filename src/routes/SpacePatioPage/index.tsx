import Header from "../../components/Header";
import GalleryPatio from "../../components/GalleryPatio";
import TabsEspaco from "../../components/TabsEspaco";
import Footer from "../../components/Footer";



import { Outlet } from "react-router-dom";

export default function SpacePatioPage() {
  
  return (
    <>
      <Header />
      <GalleryPatio />
      <TabsEspaco />

      <div className="conteudo-tabs">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

