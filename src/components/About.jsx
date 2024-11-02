import React from "react";
import img5 from "../images/5.jpg";

const About = () => {
    return (
        <>
            <div className="flex mt-32 ml-24 mr-10 mb-20 space-x-10">
                <img src={img5} alt="about" className="w-full md:w-1/2 rounded-lg shadow-lg hover:cursor-pointer"></img>
                <div className="text-center md:text-left mt-14">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"><span className="ml-40">Welcome to</span><br></br>GD RENOVATION & CONTRACTING</h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-seagreen mb-4 mt-5 ml-10">Building Dreams, One Space at a Time</h2>
                    <p className="text-gray-600 leading-relaxed w-96 ml-16">
                        At GD Renovation and Contracting, we believe in transforming your vision into reality with unmatched craftsmanship and dedication. We've been Canada's trusted and certified contractor, specializing in residential and commercial renovations. Our commitment to quality and service ensures that every project we undertake is a step towards building your dream space.
                    </p>
                </div>
            </div>

        </>
    );
}

export default About;