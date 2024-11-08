import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-50 fixed w-full top-0 z-50">
                <div className="mx-auto px-2 sm:px-6 lg:px-10">
                    <div className="relative flex items-center justify-between h-16">
                        {/* logo */}
                        <div className="flex items-center">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-14 mr-4 rounded-3xl px-1 cursor-pointer"
                                onClick={() => navigate("https://renovation-seven.vercel.app/home")}
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="flex space-x-4">
                                <NavLink
                                    to="https://renovation-seven.vercel.app/home"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    to="https://renovation-seven.vercel.app/aboutus"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    ABOUT US
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    SERVICES
                                </NavLink>
                                <NavLink
                                    to="/portfolio"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    PORTFOLIO
                                </NavLink>
                                <NavLink
                                    to="/contactus"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    CONTACT US
                                </NavLink>
                            </div>
                        </div>
                        {/* hamburger */}
                        <div className="block md:hidden" onClick={() => setOpen(!isOpen)}>
                            {isOpen ? <RxCross2 size={20} /> : <GiHamburgerMenu size={20} />}
                        </div>
                        {/* Mobile Device */}
                        <div
                            className={`absolute flex justify-center items-center md:hidden top-[4.2rem] h-38 w-full rounded-lg bg-gray-100 ${!isOpen ? "hidden" : "block"} `}
                        >
                            <div className="flex flex-col ">
                                <NavLink
                                    to="/home"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    to="/aboutus"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    ABOUT US
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    SERVICES
                                </NavLink>
                                <NavLink
                                    to="/portfolio"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    PORTFOLIO
                                </NavLink>
                                <NavLink
                                    to="/contactus"
                                    target="_top"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? "text-green-800" : "hover:text-blue-800"
                                        }`
                                    }
                                >
                                    CONTACT US
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
