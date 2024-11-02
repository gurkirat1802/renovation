import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../images/logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="bg-gray-50 fixed w-full top-0 z-50">
                <div className="mx-auto px-2 sm:px-6 lg:px-10">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <img src={Logo} alt="Logo" className="h-14 mr-4 rounded-3xl px-1 cursor-pointer" onClick={() => navigate('/home')} />
                        </div>
                        <div className="sm:block">
                            <div className="flex space-x-4">
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-4 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? 'text-green-800' : 'hover:text-blue-800'
                                        }`
                                    }
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    to="/aboutus"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-4 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? 'text-green-800' : 'hover:text-blue-800'
                                        }`
                                    }
                                >
                                    ABOUT US
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-4 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? 'text-green-800' : 'hover:text-blue-800'
                                        }`
                                    }
                                >
                                    SERVICES
                                </NavLink>
                                <NavLink
                                    to="/portfolio"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-4 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? 'text-green-800' : 'hover:text-blue-800'
                                        }`
                                    }
                                >
                                    PORTFOLIO
                                </NavLink>
                                <NavLink
                                    to="/contactus"
                                    className={({ isActive }) =>
                                        `text-gray-800 px-4 py-2 rounded-md text-sm font-medium tracking-widest transition-colors duration-300 ${isActive ? 'text-green-800' : 'hover:text-blue-800'
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