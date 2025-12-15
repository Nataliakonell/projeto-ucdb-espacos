import Footer from "../../components/Footer";
import GalleryPatio from "../../components/GalleryPatio";
import Header from "../../components/Header";
import TabsEspaco from "../../components/TabsEspaco";
import SpacePatioPageRoutes from "./routes";

export default function SpacePatioPage() {
    return(
        <>  
    <Header />
    <GalleryPatio />
    <TabsEspaco />
    <SpacePatioPageRoutes />
    <Footer  />
        </>
    );
}