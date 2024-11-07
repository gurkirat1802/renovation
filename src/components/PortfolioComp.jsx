import React from "react";

const PortfolioComp = () => {
    return (
        <>
            <div className="relative h-screen w-full mb-20">
                <div className="absolute inset-0 bg-[url('./images/portfolio.jpeg')] bg-cover bg-center h-auto">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold xl:text-6xl lg:text-5xl sm:text-4xl xs:text-2xl xs:font-semibold text-5xl bottom-8 xs:left-1/2 sm:left-2/3 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    PORTFOLIO
                </h1>
            </div>
        </>
    );
}

export default PortfolioComp;