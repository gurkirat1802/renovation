import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [animationClass1, setAnimationClass1] = useState('');
    const [animationClass2, setAnimationClass2] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
        setAnimationClass1('animate-slideLeft');
        setAnimationClass2('animate-slideRight');
    }, []);
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[url('./images/bgimage.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>
                <h1 className="absolute font-bold text-6xl top-80 left-1/2 transform -translate-x-1/2 tracking-wider text-[#faf0e1] z-10"
                    style={{
                        animation: "slideLeft 1s ease-out forwards"
                    }}>
                    YOUR VISION
                </h1>
                <h1 className="absolute font-bold text-5xl top-96 left-1/2 transform -translate-x-1/2 tracking-wider text-[#faf0e1] z-10 mt-4"
                    style={{
                        animation: "slideRight 1s ease-out forwards"
                    }}>
                    OUR CRAFTMANSHIP
                </h1>
                <Link to="/portfolio">
                    <button className="absolute text-2xl top-3/4 left-1/2 transform -translate-x-1/2 border-2 px-6 py-3 z-10 font-medium border-[#faf0e1] text-[#faf0e1] bg-transparent transition-all duration-300 hover:scale-90 hover:bg-[#8B4513] hover:text-white">
                        OUR PROJECTS
                    </button>
                </Link>
                <style>
                    {`
                        @keyframes slideLeft {
                            0% {
                                transform: translateX(-100%);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        @keyframes slideRight {
                            0% {
                                transform: translateX(100%);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        .animate-slideLeft {
                            animation: slideLeft 1s ease-out forwards;
                        }
                        .animate-slideRight {
                            animation: slideRight 1s ease-out forwards;
                        }
                    `}
                </style>
            </div>
        </>
    );
};

export default Home;