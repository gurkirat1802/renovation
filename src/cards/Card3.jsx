import React from "react";

const Card3 = (props) => {
    return (
        <div className="mb-8 border border-gray-300 rounded-lg shadow-lg hover:cursor-pointer h-80 xs:h-64 sm:h-70 med:h-70 lg:h-80 xl:h-60">
            <figure className="flex flex-col items-center justify-between h-full p-6 text-center bg-white border-b border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="w-full text-gray-600 dark:text-gray-400">
                    <h3 className="xs:text-base sm:text-lg md:text-lg med:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {props.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-justify text-xs xs:text-sm sm:text-base">
                        {props.desc}
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-4">
                    <div className="text-center">
                        <div className="text-xs xs:text-sm sm:text-base font-medium dark:text-white">
                            {props.name}
                            <span className="ml-1 text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400">
                                ({props.address})
                            </span>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default Card3;
