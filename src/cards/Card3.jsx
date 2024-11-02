import React from "react";

const Card3 = (props) => {
    return (
        <>
            <div className="mb-8 border border-gray-300 rounded-lg shadow-lg w-96 bg-white dark:bg-gray-800 hover:cursor-pointer">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-300 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-600 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {props.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {props.desc}
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center">
                        <div className="text-left rtl:text-right">
                            <div className="text-lg font-medium dark:text-white">
                                {props.name}
                                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                                    ({props.address})
                                </span>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </>
    );
}

export default Card3;