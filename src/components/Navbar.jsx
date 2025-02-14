import { useState } from "react";
import logo from "../assets/HKFCLogo.png";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Navbar = ({ setLanguage }) => {
    const [selectedLang, setSelectedLang] = useState("en");

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        setLanguage(lang);
    };

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-12" src={logo} alt="logo" />
            </div>

            {/* Language Buttons */}
            <div className="flex gap-4">
                <button 
                    className={`px-4 py-2 border border-white rounded-md transition duration-300 
                                ${selectedLang === "en" ? "text-white" : "text-gray-300"} hover:text-white`}
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => handleLanguageChange("en")}
                >
                    English
                </button>

                <button 
                    className={`px-4 py-2 border border-white rounded-md transition duration-300 
                                ${selectedLang === "fr" ? "text-white" : "text-gray-300"} hover:text-white`}
                    style={{ backgroundColor: "transparent" }}
                    onClick={() => handleLanguageChange("fr")}
                >
                    Français
                </button>
            </div>

            {/* Social Media Links */}
            <div className="m-8 flex justify-end gap-4 text-3xl w-full">
                <a href="https://www.instagram.com/hkfc_uottawa" target="_blank" rel="noopener noreferrer">
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
