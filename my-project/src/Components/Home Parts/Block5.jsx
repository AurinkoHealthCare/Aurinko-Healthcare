import React from "react";
import { productTypes } from "../../Data/data";

const Block5 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 md:px-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-green-800">
        PRODUCT <span className="text-orange-600">TYPES</span>
      </h1>
      <div
        className="h-1 w-48 md:w-56 lg:w-64 xl:w-72 max-w-5xl rounded"
        style={{ background: "linear-gradient(to right, #ea580c, #15803d)" }}
      ></div>

      <div className="w-full flex flex-col items-center justify-center mt-8 space-y-12">
        {productTypes.map((product, index) => (
          <div
            key={index}
            className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="text-center md:text-left max-w-5xl mx-auto">
                  <h2 className="text-lg md:text-xl font-semibold text-green-900">
                    {product.title}
                  </h2>
                  <p className="text-gray-700 mt-2">{product.description}</p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="text-center md:text-left max-w-5xl mx-auto">
                  <h2 className="text-lg md:text-xl font-semibold text-orange-600">
                    {product.title}
                  </h2>
                  <p className="text-gray-700 mt-2">{product.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block5;
