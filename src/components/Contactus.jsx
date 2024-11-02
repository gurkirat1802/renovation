import React from "react";
import Map from "./Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contactus = () => {
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[url('./images/contactimg.jpeg')] bg-contain bg-center h-3/4">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold text-6xl top-96 left-1/4 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    CONTACT US
                </h1>
            </div>
            <div className="mx-auto mb-20 flex flex-col md:flex-row md:space-x-24 px-10 md:px-20 space-y-10 md:space-y-0">
                <div className="bg-white p-8 shadow-lg rounded-lg w-full md:w-2/3">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">CONTACT INFO</h1>
                    <hr className="mb-4 border-gray-300" />
                    <p className="text-lg text-gray-600 mb-4">You can contact us from Monday to Sunday, 9:00 AM - 9:00 PM</p>
                    <hr className="mb-4 border-gray-300" />
                    <FontAwesomeIcon icon={faPhone} className="text-seagreen mr-2" />
                    <span className="text-2xl font-semibold text-seagreen mb-4">647-262-7700</span>
                    <hr className="border-gray-300 mb-4 mt-4" />
                    <FontAwesomeIcon icon={faLocationDot} className="text-seagreen mr-2" />
                    <span className="text-2xl font-semibold text-seagreen mb-4">131 Prince Street, Markham, Ontario, Toronto</span>
                </div>
                <div className="w-full md:w-4/5">
                    <Map />
                </div>
            </div>
        </>
    );
}

export default Contactus;