import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServComp from "../components/ServComp";

const ServicesPage = () => {
    return (
        <>
            <Navbar />
            <ServComp />
            <div className="p-16 bg-slate-900 shadow-lg mb-20 px-44">
                <h1 className="text-4xl font-bold text-white mb-4">Excited to Begin Your Renovation Journey?</h1>
                <h2 className="text-white font-sans font-medium text-lg">
                    Reach out to us at <span className="text-blue-600 font-medium">647-262-7700</span> for a complimentary on-site consultation!
                </h2>
            </div>
            <Footer />
        </>
    );
}

export default ServicesPage;