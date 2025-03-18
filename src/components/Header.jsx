import { Link } from "react-router-dom";

export default function Header() {
    return (
        // <header className="w-full bg-[#1B1A1A] text-white py-4 px-6 shadow-md">
        <header className="w-full h-16 bg-black text-center flex items-center justify-center bg-pink-500 text-white py-4 px-6 shadow-md h-full w-full flex items-center justify-center">
            <div className="w-full flex justify-center items-center">
                <nav>
                    <ul className="flex space-x-6 justify-end">
                        <li><a href="#" className="hover:!text-gray-300 !text-[#FFFFFF]">11.00 AM</a></li>
                        <li><Link to="/" className="hover:!text-gray-300 !text-[#FFFFFF]">Museum</Link></li>
                        <li><Link to="/my-gallery" className="hover:!text-gray-300 !text-[#FFFFFF]">My Gallery</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
