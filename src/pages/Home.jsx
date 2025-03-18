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
            <div className="flex justify-center items-center h-screen bg-gray-900">
            </div>
            <Instruction />
            <ExploreArt />
        </div>
    )
}
