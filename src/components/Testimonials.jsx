import React, { useState } from "react";
import Slider from "react-slick";
import Card3 from "../cards/Card3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 -left-14 z-10 cursor-pointer bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            onClick={onClick}
            style={{ padding: "10px", fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
            <FaArrowLeft />
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 -right-14 z-10 cursor-pointer bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            onClick={onClick}
            style={{ padding: "10px", fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
            <FaArrowRight />
        </div>
    );
};

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: handleBeforeChange,
        customPaging: i => (
            <div
                className="w-4 h-4 rounded-full mx-1 cursor-pointer"
                style={{
                    backgroundColor: i === currentSlide ? '#4A5568' : '#CBD5E0',
                    width: '10px',
                    height: '10px',
                }}
            ></div>
        ),
        appendDots: dots => (
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {dots}
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],
    };

    return (
        <>
            <h1 className="text-center text-2xl">TESTIMONIALS</h1>
            <p className="text-center mt-2 text-gray-600 leading-relaxed">
                Our success is reflected in the voices of our clients.
            </p>
            <div className="mt-6 w-full mx-auto px-16 sm:px-14 md:px-13 lg:px-18 relative mb-20 overflow-hidden py-8">
                <Slider className="" {...settings}>
                    <div className="w-32 px-2 md:px-4 lg:px-6">
                        <Card3
                            title="Full Home Renovations"
                            desc="GD Renovation & Contracting turned our home into a modern masterpiece with amazing attention to detail. Highly professional and respectful!"
                            name="Michal S."
                            address="Toronto, Canada"
                        />
                    </div>
                    <div className="flex justify-center items-center md:px-4 lg:px-6">
                        <Card3
                            title="Legal Basement Finishing"
                            desc="They finished our basement beautifully and ensured everything was up to code. The process was seamless and the results are fantastic!"
                            name="Sarah W."
                            address="Markham, Canada"
                        />
                    </div>
                    <div className="px-2 md:px-4 lg:px-6">
                        <Card3
                            title="Painting"
                            desc="They helped us pick the perfect colors, and the finish is flawless. Our home feels refreshed and vibrant. Highly recommended!"
                            name="John L."
                            address="Brampton, Canada"
                        />
                    </div>
                    <div className="px-2 md:px-4 lg:px-6">
                        <Card3
                            title="Kitchen Remodeling"
                            desc="GD Renovation delivered a beautiful, functional kitchen that exceeded our expectations. Great attention to detail and quality materials!"
                            name="Emily"
                            address="Toronto, Canada"
                        />
                    </div>
                    <div className="px-2 md:px-4 lg:px-6">
                        <Card3
                            title="Bathroom Remodeling"
                            desc="They transformed our bathroom into a luxury space with high-quality fixtures and perfect finishes. Very professional team!"
                            name="David"
                            address="Ontario, Canada"
                        />
                    </div>
                    <div className="px-2 md:px-4 lg:px-6">
                        <Card3
                            title="Accent Walls"
                            desc="The accent wall they installed adds incredible character to our room. Top-notch craftsmanship and unique style!"
                            name="George T."
                            address="Brampton, Canada"
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Testimonials;
