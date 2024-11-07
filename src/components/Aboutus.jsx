import React from "react";
import img from "../images/group.jpg";

const Aboutus = () => {
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[url('./images/aboutpage.jpg')] bg-cover bg-center h-auto">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold xl:text-6xl lg:text-5xl sm:text-4xl xs:text-2xl xs:font-semibold text-5xl bottom-8 xs:left-1/2 sm:left-2/3 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    ABOUT US
                </h1>
            </div>
            <div className="flex flex-col mt-24 mb-20 mx-20 xs:ml-10 md:mx-8 sm:mx-10 xs:mx-10 md:space-x-1 md:flex-row text-justify justify-center items-center">
                <div className="rounded-lg">
                    <img src={img} alt="about" className="w-full rounded-lg shadow-lg hover:cursor-pointer md:h-full "></img>
                </div>
                <div className="text-center mt-14 lg:mt-8 md:mt-4 mb-8 md:mb-4 sm:px-10 md:mx-2 md:w-3/4 lg:w-1/2 bg-white shadow-xl border-2 border-gray-200 rounded-lg p-8 sm:p-6">
                    <h1 className="font-bold text-gray-800 mb-2 xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl text-2xl xs:text-lg">
                        <span className="">Welcome to</span><br />GD RENOVATION & CONTRACTING
                    </h1>
                    <h2 className="font-semibold text-seagreen mb-4 xl:text-2xl lg:text-xl md:text-base sm:text-xl text-xl xs:text-lg">
                        Building Dreams, One Space at a Time
                    </h2>
                    <p className="text-gray-600 leading-relaxed xl:text-xl lg:text-lg md:text-sm sm:text-base text-sm">
                        At GD Renovation and Contracting, we believe in transforming your vision into reality with unmatched craftsmanship and dedication. We've been Canada's trusted and certified contractor, specializing in residential and commercial renovations. Our commitment to quality and service ensures that every project we undertake is a step towards building your dream space.
                    </p>
                </div>
            </div>
            <div className="p-16 bg-slate-900 shadow-lg mt-20 mb-20 text-center">
                <div className="">
                    <h1 className="sm:text-4xl xs:text-3xl font-bold text-white mb-4">Excited to Begin Your Renovation Journey?</h1>
                    <h2 className="text-white font-sans font-medium text-lg">
                        Reach out to us at <span className="text-blue-600 font-medium">647-262-7700</span> for a complimentary on-site consultation!
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Aboutus;