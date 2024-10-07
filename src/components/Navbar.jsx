import logo from "../assets/HKFCLogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-12" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex justify-end gap-4 text-3xl w-full">
                <a href="https://www.instagram.com/hkfc_uottawa?igsh=MWFpMTU2Nmh6Y3Zxbg==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a> 
                <a href="mailto:uo.hkfc@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>

            </div>
        </nav>
    );
};

export default Navbar;
