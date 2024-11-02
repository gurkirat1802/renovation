import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:cursor-pointer">
                <div
                    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src={props.image}
                        alt="card-image" 
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {props.title}
                    </h5>
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit text-justify">
                        {props.desc}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;