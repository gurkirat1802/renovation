import React from "react";
import Card from "../cards/Card";
import Card2 from "../cards/Card2";
import img1 from "../images/serv1.jpeg";
import img2 from "../images/serv2.jpeg";
import img3 from "../images/serv3.jpeg";
import { faHouse, faRulerCombined, faPaintRoller, faKitchenSet, faBrush, faToilet } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <>
            <h1 className="text-center text-2xl mt-32">WHY CHOOSE US ?</h1>
            <h1 className="text-center mt-2 text-gray-600 leading-relaxed">Choose us for unmatched quality and savings—your dream home starts here!</h1>
            <div className="flex flex-wrap justify-center gap-6 mb-20 mt-10">
                <Card
                    image={img1}
                    title="TOP-NOTCH RENOVATIONS, UNBEATABLE PRICES"
                    desc="Upgrade your home with top-quality craftsmanship at affordable rates. Save more by cutting out the middleman with GD Renovation & Contracting, Canada."
                />
                <Card
                    image={img2}
                    title="EXPERT CRAFTSMEN, SUPERIOR RESULTS"
                    desc="Our expert team ensures top-tier craftsmanship in every project. We use premium materials and trusted suppliers for the highest standards in every installation."
                />
                <Card
                    image={img3}
                    title="ELEVATE YOUR HOME, EMBRACE COMFORT"
                    desc="Bring your dream home to life with GD Renovation & Contracting, Canada. Explore our tailored renovation services to create a sanctuary you'll love every day."
                />
            </div>
            <div>
                <h1 className="text-center text-2xl mt-32">OUR SERVICES</h1>
                <h1 className="text-center mt-2 text-gray-600 leading-relaxed">Discover our services and make your dream space a reality!</h1>
                <div className="flex flex-wrap justify-center gap-6 mb-20 mt-7">
                    <Card2
                        heading="FULL HOME RENOVATIONS"
                        description="Transform your home completely with our full-service renovations. We craft seamless designs for a space that perfectly reflects your style."
                        icon={faHouse}
                        link="/services/fullhomerenovation"
                    />
                    <Card2
                        heading="LEGAL BASEMENT FINISHING"
                        description="Complete your basement with our code-compliant finishing services. We create stylish spaces to expand your living area."
                        icon={faRulerCombined}
                        link="/services/basementrenovation"
                    />
                    <Card2
                        heading="PAINTING"
                        description="Refresh your home with our expert painting. We use quality finishes to bring vibrant colors and a clean look to every room."
                        icon={faPaintRoller}
                        link="/services/painting"
                    />
                    <Card2
                        heading="KITCHEN REMODELING"
                        description="Redesign your kitchen with us. We combine modern style and convenience to make your kitchen both beautiful and efficient."
                        icon={faKitchenSet}
                        link="/services/kitchenremodeling"
                    />
                    <Card2
                        heading="BATHROOM REMODELING"
                        description="Upgrade your bathroom with our remodeling services. We create spaces that blend style and functionality for everyday comfort."
                        icon={faToilet}
                        link="/services/bathroomremodeling"
                    />
                    <Card2
                        heading="ACCENT WALLS"
                        description="Enhance your rooms with a custom accent wall. Our designs add a bold, stylish touch to elevate any space in your home."
                        icon={faBrush}
                        link="/services/accentwalls"
                    />
                </div>
            </div>
        </>
    );
}

export default Services;