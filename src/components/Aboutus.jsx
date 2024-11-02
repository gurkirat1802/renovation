import React from "react";
import img from "../images/group.jpg";

const Aboutus = () => {
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[url('./images/aboutpage.jpg')] bg-contain bg-center h-3/4">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold text-6xl top-96 left-2/3 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    ABOUT US
                </h1>
            </div>
            <div className="flex ml-24 mr-10 mb-20 relative z-20">
                <img src={img} alt="about" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div className="absolute max-w-2xl w-1/2 bg-white shadow-lg rounded-lg overflow-hidden mt-8 border-2 border-seagreen top-44 left-2/3 transform -translate-x-1/2 -translate-y-1/2 min-h-[450px]">
                    <div className="p-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">
                            <span className="block md:inline">Welcome to</span>
                            <br />
                            GD RENOVATION & CONTRACTING
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-seagreen mb-4 mt-5 text-center md:text-left">
                            Building Dreams, One Space at a Time
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            At GD Renovation and Contracting, we believe in transforming your vision into reality with unmatched craftsmanship and dedication. We've been Canada's trusted and certified contractor, specializing in residential and commercial renovations. Our commitment to quality and service ensures that every project we undertake is a step towards building your dream space. Specializing in residential and commercial renovations. Our commitment to quality and service ensures that every project we undertake is a step towards building your dream space.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-16 bg-slate-900 shadow-lg mt-32 mb-20 px-44">
                <h1 className="text-4xl font-bold text-white mb-4">Excited to Begin Your Renovation Journey?</h1>
                <h2 className="text-white font-sans font-medium text-lg">
                    Reach out to us at <span className="text-blue-600 font-medium">647-262-7700</span> for a complimentary on-site consultation!
                </h2>
            </div>
        </>
    );
}

export default Aboutus;