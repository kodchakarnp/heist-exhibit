import Header from "../components/Header"
import SearchSection from "./SearchSection"
import HeroBanner from "../components/HeroBanner"
import Instruction from "../components/Instruction"
import ExploreArt from "../components/ExploreArt"

export default function Home() {
    return (
        <div className="w-full">
            <HeroBanner />
            <Instruction />
            <ExploreArt />
            <div className="text-center">
                Hello! It's Home
            </div>
        </div>
    )
}
