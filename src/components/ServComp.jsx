import React from "react";
import Card4 from "../cards/Card4";
import img1 from "../images/5.jpg";
import img2 from "../images/13.jpg";
import img3 from "../images/7.jpg";
import img4 from "../images/2.jpg";
import img5 from "../images/35.jpg";
import img6 from "../images/23.jpg";

const ServComp = () => {
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[url('./images/servimg.jpeg')] bg-cover bg-center h-auto">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold xl:text-6xl lg:text-5xl sm:text-4xl xs:text-2xl xs:font-semibold text-5xl bottom-8 xs:left-1/2 sm:left-2/3 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    SERVICES
                </h1>
            </div>
            <div className="container mx-auto px-4 py-8 mt-20">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img1}
                            title="FULL HOME RENOVATION"
                            desc="Transform your entire living space with our full home renovation services, crafted to reflect your unique style and needs."
                            link="./services/fullhomerenovation"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img2}
                            title="LEGAL BASEMENT FINISHING"
                            desc="Maximize your home's value with legal basement finishing, creating a functional space that meets all your needs."
                            link="./services/basementrenovation"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img3}
                            title="PAINTING"
                            desc="Refresh your interiors and exteriors with flawless, vibrant finishes, crafted by our professional painting services."
                            link="./services/painting"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img4}
                            title="KITCHEN REMODELING"
                            desc="Modernize your kitchen with custom designs and functional layouts, creating a space tailored for your everyday needs."
                            link="./services/kitchenremodeling"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img5}
                            title="BATHROOM REMODELING"
                            desc="Upgrade your bathroom with sleek fixtures and modern designs, blending luxury and functionality in every detail."
                            link="./services/bathroomremodeling"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img6}
                            title="ACCENT WALLS"
                            desc="Enhance your space with unique accent walls, designed to make a bold statement and elevate any room's character."
                            link="./services/accentwalls"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServComp;