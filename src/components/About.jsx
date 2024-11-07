import React from "react";
import img5 from "../images/5.jpg";

const About = () => {
    return (
        <>
            <div className="flex flex-col mt-24 mb-20 mx-20 xs:ml-10 md:mx-8 sm:mx-10 xs:mx-10 md:space-x-1 md:flex-row text-justify">
                <div className="rounded-lg">
                    <img src={img5} alt="about" className="w-full rounded-lg shadow-lg hover:cursor-pointer md:h-full"></img>
                </div>
                <div className="text-center mt-14 lg:mt-8 md:mt-4 md:mb-4 sm:px-10 md:mx-4">
                    <h1 className="font-bold text-gray-800 mb-2 xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl text-2xl sm:mr-0 xs:text-lg"><span className="">Welcome to</span><br></br>GD RENOVATION & CONTRACTING</h1>
                    <h2 className="font-semibold text-seagreen mb-4 xl:text-2xl lg:text-xl md:text-base sm:text-xl text-xl sm:mr-0 xs:text-lg">Building Dreams, One Space at a Time</h2>
                    <p className="text-gray-600 leading-relaxed xl:text-xl lg:text-lg md:text-base sm:text-base sm:mr-0 text-sm">
                        At GD Renovation and Contracting, we believe in transforming your vision into reality with unmatched craftsmanship and dedication. We've been Canada's trusted and certified contractor, specializing in residential and commercial renovations. Our commitment to quality and service ensures that every project we undertake is a step towards building your dream space.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;