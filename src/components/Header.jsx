import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full bg-[#1B1A1A] text-white py-4 px-6 shadow-md">
            <div className="w-full flex justify-between items-center">

                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:!text-gray-300 !text-[#FFFFFF]">11.00 AM</a></li>
                        <li><Link to="/" className="hover:!text-gray-300 !text-[#FFFFFF]">Museum</Link></li>
                        <li><Link to="/my-gallery" className="hover:!text-gray-300 !text-[#FFFFFF]">My Gallery</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
