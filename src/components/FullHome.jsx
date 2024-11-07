import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import img from "../images/fullhomedesc.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/3.jpg";
import img3 from "../images/6.jpg";
import img4 from "../images/8.jpg";
import img5 from "../images/10.jpg";
import img6 from "../images/12.jpg";
import img7 from "../images/24.jpg";
import img8 from "../images/26.jpg";
import img9 from "../images/27.jpg";
import img10 from "../images/35.jpg";
import img11 from "../images/28.jpg";

const FullHome = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoom, setZoom] = useState(1);
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    const closeLightbox = () => {
        setIsOpen(false);
        setZoom(1);
    };
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setZoom(1);
    };
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setZoom(1);
    };
    const zoomIn = () => setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3));
    const zoomOut = () => setZoom((prevZoom) => Math.max(prevZoom - 0.25, 1));
    const toggleFullScreen = () => {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
            elem.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <>
            <Navbar />
            <div className="relative h-screen w-full mb-20">
                <div className="absolute inset-0 bg-[url('./images/6.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 font-bold xl:text-4xl lg:text-2xl sm:text-3xl xs:text-xl xs:font-semibold tracking-wider z-20 text-[#F5F5DC] text-center w-full px-2">
                    SERVICES - FULL HOME RENOVATION
                </div>
            </div>
            <div className="flex flex-col med:flex-row items-center justify-between p-8 bg-gray-100 px-8 py-10">
                <div className="mb-20 med:w-1/2 px-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Transform Your Home!</h1>
                    <h2 className="font-sans font-medium text-lg text-gray-700 mb-6 leading-relaxed text-justify">
                        GD Renovation & Contracting delivers seamless home renovations with expert precision.
                    </h2>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Services:</h3>
                    <ul className="list-disc list-inside text-gray-700 font-medium text-lg space-y-2">
                        <li>Comprehensive home renovations.</li>
                        <li>Modern interior and exterior remodeling.</li>
                        <li>Expert structural alterations.</li>
                        <li>Upgrades for electrical, plumbing, and HVAC.</li>
                        <li>Responsible waste disposal services.</li>
                    </ul>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-8">Let's Create Your Dream Home!</h3>
                </div>
                <div className="med:w-1/2">
                    <img
                        src={img}
                        alt="Home Renovation"
                        className="rounded-lg shadow-lg w-full h-auto object-cover inset-0 bg-black opacity-90 med:h-full"
                    />
                </div>
            </div>
            <div className="p-10 bg-slate-300">
                <p className="text-center mt-2 text-gray-700 leading-relaxed mx-auto text-lg">
                    Check out our recent basement renovation, transforming it into a modern, functional space that showcases our commitment to quality craftsmanship!
                </p>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Project ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:brightness-75 cursor-pointer"
                            onClick={() => openLightbox(index)}
                        />
                    ))}
                </div>
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                        <img
                            src={images[currentImageIndex]}
                            alt="Enlarged view"
                            className="max-w-full max-h-full"
                            style={{ transform: `scale(${zoom})` }}
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
                        >
                            &#8249;
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
                        >
                            &#8250;
                        </button>
                        <div className="absolute bottom-10 flex space-x-4 text-white text-lg sm:text-xl">
                            <button
                                onClick={zoomOut}
                                className="p-2 bg-black bg-opacity-50 rounded-full"
                            >
                                &#8722;
                            </button>
                            <button
                                onClick={zoomIn}
                                className="p-2 bg-black bg-opacity-50 rounded-full"
                            >
                                &#43;
                            </button>
                        </div>
                        <button
                            onClick={toggleFullScreen}
                            className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl p-2 bg-black bg-opacity-50 rounded-full"
                        >
                            &#x26F6;
                        </button>
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl"
                        >
                            &times;
                        </button>
                    </div>
                )}
            </div>
            <div className="p-16 bg-slate-900 shadow-lg mt-20 text-center">
                <h1 className="sm:text-4xl xs:text-3xl font-bold text-white mb-4">Excited to Begin Your Renovation Journey?</h1>
                <h2 className="text-white font-sans font-medium text-lg">
                    Reach out to us at <span className="text-blue-600 font-medium">647-262-7700</span> for a complimentary on-site consultation!
                </h2>
            </div>
            <Footer />
        </>
    );
}

export default FullHome;