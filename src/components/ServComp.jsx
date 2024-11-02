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
                <div className="absolute inset-0 bg-[url('./images/servimg.jpeg')] bg-contain bg-center h-3/4">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold text-6xl top-96 left-2/3 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    SERVICES
                </h1>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img1}
                            title="FULL HOME RENOVATION"
                            desc="Transform your entire living space with our comprehensive full home renovation services. We blend style, functionality, and superior craftsmanship to create a home that perfectly reflects your vision and lifestyle."
                            link="./services/fullhomerenovation"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img2}
                            title="LEGAL BASEMENT FINISHING"
                            desc="Maximize your home's potential with our expert legal basement finishing services. Whether it's creating a cozy living space, we ensure your basement is transformed with quality craftsmanship."
                            link="./services/basementrenovation"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img3}
                            title="PAINTING"
                            desc="Elevate your home's aesthetic with our professional painting services. Whether it's refreshing interiors or revitalizing exteriors, we deliver flawless finishes and vibrant results that bring your vision to life."
                            link="./services/painting"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img4}
                            title="KITCHEN REMODELING"
                            desc="Transform your kitchen into a modern, functional space with our kitchen remodeling expertise. From custom cabinetry to innovative layouts, we create kitchens that are both stylish and highly efficient for your everyday needs."
                            link="./services/kitchenremodeling"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img5}
                            title="BATHROOM REMODELING"
                            desc="Upgrade your bathroom into a luxurious retreat with our bathroom remodeling services. From sleek fixtures to contemporary designs, we craft spaces that blend comfort and style, tailored to your preferences."
                            link="./services/bathroomremodeling"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <Card4
                            image={img6}
                            title="ACCENT WALLS"
                            desc="Add a touch of elegance and personality to your space with our custom accent walls. We design unique feature walls that enhance the character of any room, making bold design statements that stand out."
                            link="./services/accentwalls"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServComp;