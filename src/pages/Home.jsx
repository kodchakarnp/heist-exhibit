import Header from "../components/Header"
import SearchSection from "./SearchSection"
import HeroBanner from "../components/HeroBanner"
import Instruction from "../components/Instruction"
import ExploreArt from "../components/ExploreArt"

export default function Home() {
    return (
        // <div className="w-full">
        // <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-full flex flex-col">
            <HeroBanner />
            <Instruction />
            <ExploreArt />
        </div>
    )
}
