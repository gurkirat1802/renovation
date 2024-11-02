import React from "react";
import img from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-slate-200 px-10">
                <div className="flex flex-col lg:flex-row justify-between p-10 space-y-8 lg:space-y-0">
                    <div className="flex flex-col items-start max-w-sm">
                        <img src={img} alt="Logo" className="h-14 mb-4 rounded-3xl" />
                        <p className="leading-relaxed">
                            At GD Renovation & Contracting, we turn your vision into reality with exceptional craftsmanship and unwavering dedication. As a trusted and certified contractor across Canada, we specialize in both residential and commercial renovations. Our steadfast commitment to quality and service means every project we undertake brings you one step closer to your dream space.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-4 text-lg mt-8">SERVICES</h1>
                        <ul className="space-y-2">
                            <li>
                                <NavLink to="/services/fullhomerenovation" target="_top" activeClassName="active">
                                    FULL HOME RENOVATION
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services/basementrenovation" target="_top" activeClassName="active">
                                    LEGAL BASEMENT FINISHING
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services/painting" target="_top" activeClassName="active">
                                    PAINTING
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services/kitchenremodeling" target="_top" activeClassName="active">
                                    KITCHEN REMODELING
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services/bathroomremodeling" target="_top" activeClassName="active">
                                    BATHROOM REMODELING
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services/accentwalls" target="_top" activeClassName="active">
                                    ACCENT WALLS
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-4 text-lg mt-8">USEFUL LINKS</h1>
                        <ul className="space-y-2">
                            <li><NavLink to="/home" target="_top" className="hover:text-gray-700">HOME</NavLink></li>
                            <li><NavLink to="/aboutus" target="_top" className="hover:text-gray-700">ABOUT US</NavLink></li>
                            <li><NavLink to="/services" target="_top" className="hover:text-gray-700">SERVICES</NavLink></li>
                            <li><NavLink to="/portfolio" target="_top" className="hover:text-gray-700">PORTFOLIO</NavLink></li>
                            <li><NavLink to="/contactus" target="_top" className="hover:text-gray-700">CONTACT US</NavLink></li>
                        </ul>
                    </div>
                </div>
                <hr className="border-t-2 border-gray-300 my-4 mx-10" />
                <div className="text-center py-4">
                    <p className="text-sm text-gray-600">© 2024 GD Renovation & Contracting. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;