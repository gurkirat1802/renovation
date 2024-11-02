import React from "react";

const PortfolioComp = () => {
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[url('./images/portfolio.jpeg')] bg-contain bg-center h-3/4">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold text-6xl top-96 left-1/4 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    PORTFOLIO
                </h1>
            </div>
        </>
    );
}

export default PortfolioComp;