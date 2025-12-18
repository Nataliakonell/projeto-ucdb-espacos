import type { SpaceCard } from "../../components/SpaceCards";
import SpaceCards from "../../components/SpaceCards";
import spaceCardPhoto from "../../../public/imgs/patio2.jpg";
import { Link } from "react-router-dom";
import "../../components/SpaceCards/styles.css"

export default function SpaceCardPatio() {

    const spaceCards: SpaceCard[] = [
        {
            id: 1,
            photo: spaceCardPhoto,
            title: "Pátio",
            description: "Anexar as comodidades do espaço aqui.",
        },
    ];

    return (
        <>
            <Link to="/espaco" className="spacecard-link">
            
                <SpaceCards spaceCards={spaceCards} />
            </Link>
        </>
    );
}