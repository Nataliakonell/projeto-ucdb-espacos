import type { SpaceCard } from "../../components/SpaceCards";
import SpaceCards from "../../components/SpaceCards";
import spaceCardPhoto from "../../../public/imgs/patio2.jpg";

export default function SpaceCardPatio() {

    const spaceCards: SpaceCard[] = [
        {
            id: 1,
            photo: spaceCardPhoto,
            title: "Patio",
            description: "Comodidades"
        },
    ];

    return (
        <SpaceCards spaceCards={spaceCards} />
    );
}