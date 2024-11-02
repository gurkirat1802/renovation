import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import PortfolioComp from "../components/PortfolioComp";

const PortfolioPage = () => {
    return(
        <>
            <Navbar />
            <PortfolioComp/>
            <Portfolio/>
            <Footer />
        </>
    );
}

export default PortfolioPage;