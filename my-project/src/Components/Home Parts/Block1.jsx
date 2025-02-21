import React from "react";

const Block1 = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8 px-4 md:px-8 lg:px-12">
            <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center md:text-left mb-6 text-gray-800 relative">
                    Welcome to Aurinko Healthcare
                    <span className="absolute top-full left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 mt-2 w-24 h-1 bg-orange-600"></span>
                </h1>
                <p className="text-gray-700 text-justify mb-4 leading-relaxed">
                    Aurinko Healthcare is an innovation-driven pharmaceutical company incorporated on 21st November 2014,
                    received WHO-GMP, FSSAI, HACCP, ISO 9001-2015, and ISO 22000-2018 certifications for quality and robust
                    management systems.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed">
                    Aurinko Healthcare is a member of elite business regulatory bodies of India such as the Federation of
                    Indian Chamber of Commerce and Industry, Federation of Indian Export Organizations, Pharmaceutical
                    Export Promotion Council, PHD Chamber of Commerce, and Spice Board of India.
                </p>
            </div>

            <div className="w-full md:w-1/2 h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] shadow-lg">
                <img
                    src="/Assets/Aurinko Home.jpeg"
                    alt="Aurinko Healthcare"
                    className="w-full h-full object-cover rounded-xl shadow-md"
                />
            </div>
        </div>
    );

};

export default Block1;