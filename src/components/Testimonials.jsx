import React, { useState } from "react";
import Slider from "react-slick";
import Card3 from "../cards/Card3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
            onClick={onClick}
        >
            &#9664;
        </div>
    );
};
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 cursor-pointer bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
            onClick={onClick}
        >
            &#9654;
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
                    height: '10px'
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
            <div className="mt-6 w-full max-w-screen-xl mx-auto px-8 relative mb-20">
                <Slider {...settings}>
                    <Card3
                        title="Full Home Renovations"
                        desc="GD Renovation & Contracting transformed our outdated home into a modern masterpiece. The attention to detail and quality of work were outstanding. From start to finish, the team was professional, punctual, and respectful of our space. We couldn't be happier with the results!"
                        name="Michal S."
                        address="Toronto, Canada"
                    />
                    <Card3
                        title="Legal Basement Finishing"
                        desc="We hired GD Renovation & Contracting to finish our basement, and they did an exceptional job. The process was seamless, and they were very knowledgeable about legal requirements. Our basement is now a beautiful and functional living space. Highly recommended!"
                        name="Sarah W."
                        address="Markham, Canada"
                    />
                    <Card3
                        title="Painting"
                        desc="The painting service provided by GD Renovation & Contracting was top-notch. They helped us choose the perfect colors and finished the job quickly and efficiently. The final result was flawless, and our home feels refreshed and vibrant. We'll definitely use their services again."
                        name="John L."
                        address="Brampton, Canada"
                    />
                    <Card3
                        title="Kitchen Remodeling"
                        desc="Our kitchen was in desperate need of an update, and GD Renovation & Contracting delivered beyond our expectations. The design is both stylish and functional, with high-quality materials and craftsmanship. They listened to our needs and brought our vision to life. We love our new kitchen."
                        name="Emily"
                        address="Toronto, Canada"
                    />
                    <Card3
                        title="Bathroom Remodeling"
                        desc="GD Renovation & Contracting completely transformed our bathroom into a luxurious space. They paid close attention to every detail, from the tiles to the fixtures, and made sure everything was perfect. The team was professional and courteous, and the project was completed on time."
                        name="David"
                        address="Ontario, Canada"
                    />
                    <Card3
                        title="Accent Walls"
                        desc="We wanted to bring a unique touch to our living room, and GD Renovation & Contracting recommended an accent wall. The result exceeded our expectations! The wall adds incredible depth and character to the room, and the quality of workmanship is outstanding."
                        name="George T."
                        address="Brampton, Canada"
                    />
                </Slider>
            </div>
        </>
    );
};

export default Testimonials;