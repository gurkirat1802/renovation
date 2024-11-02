import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";

const Card2 = (props) => {
    return (
        <>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:cursor-pointer">
                <div className="p-6">
                    <FontAwesomeIcon icon={props.icon} className="w-12 h-12 mb-4 text-gray-900" />
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {props.heading}
                    </h5>
                    <p className="block font-sans text-base antialiased leading-relaxed text-inherit text-justify font-normal">
                        {props.description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <NavLink to={props.link} className="inline-block" target="_top">
                        <button
                            className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gray-100 hover:bg-gray-900/10 active:bg-gray-900/20"
                            type="button">
                            Explore
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Card2;