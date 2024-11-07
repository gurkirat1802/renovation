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
                <div className="flex flex-col items-center justify-center h-screen relative z-10 top-20">
                    <h1
                        className="font-bold text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl tracking-wider text-[#faf0e1] text-2xl mb-2"
                        style={{
                            animation: "slideLeft 1s ease-out forwards"
                        }}
                    >
                        YOUR VISION
                    </h1>
                    <h1
                        className="font-bold text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl tracking-wider text-[#faf0e1] text-xl"
                        style={{
                            animation: "slideRight 1s ease-out forwards"
                        }}
                    >
                        OUR CRAFTMANSHIP
                    </h1>
                    <Link to="/portfolio" target="_top" className="mt-12">
                        <button className="xl:text-2xl xl:px-6 xl:py-3 border-2 font-medium border-[#faf0e1] text-[#faf0e1] bg-transparent transition-all duration-300 hover:scale-90 hover:bg-gradient-to-r hover:from-[#8B4513] hover:to-[#CD853F] hover:text-white md:texl-xl md:px-5 md:py-2 sm:text-lg sm:px-4 sm:py-2 text-lg px-4 py-2 rounded-lg">
                            OUR PROJECTS
                        </button>
                    </Link>
                </div>

                <style>
                    {`
                        @keyframes slideLeft {
                            0% {
                                transform: translateX(-100%);
                            }
                            100% {
                                transform: translateX(0);
                            }
                        }
                        @keyframes slideRight {
                            0% {
                                transform: translateX(100%);
                            }
                            100% {
                                transform: translateX(0);
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