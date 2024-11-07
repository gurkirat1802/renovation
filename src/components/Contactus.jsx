import React from "react";
import Map from "./Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contactus = () => {
    return (
        <>
            <div className="relative h-screen w-full mb-20">
                <div className="absolute inset-0 bg-[url('./images/contactimg.jpeg')] bg-cover bg-center h-auto">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold xl:text-6xl lg:text-5xl sm:text-3xl xs:text-2xl xs:font-semibold text-5xl bottom-8 xs:left-1/2 sm:left-2/3 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    CONTACT US
                </h1>
            </div>
            <div className="mx-auto mb-20 flex flex-col md:flex-row md:space-x-8 px-5 sm:px-10 md:px-20 space-y-10 md:space-y-0">
                <div className="bg-white p-6 sm:p-8 shadow-lg rounded-lg w-full md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">CONTACT INFO</h1>
                    <hr className="mb-4 border-gray-300" />
                    <p className="text-base sm:text-lg text-gray-600 mb-4">
                        You can contact us from Monday to Sunday, 9:00 AM - 9:00 PM
                    </p>
                    <hr className="mb-4 border-gray-300" />
                    <div className="flex items-center mb-4">
                        <FontAwesomeIcon icon={faPhone} className="text-seagreen mr-2" />
                        <span className="text-xl sm:text-2xl font-semibold text-seagreen">647-262-7700</span>
                    </div>
                    <hr className="border-gray-300 mb-4 mt-4" />
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="text-seagreen mr-2" />
                        <span className="text-xl sm:text-2xl font-semibold text-seagreen">
                            131 Prince Street, Markham, Ontario, Toronto
                        </span>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Map />
                </div>
            </div>

        </>
    );
}

export default Contactus;