import React, { useState } from "react";

const tabs = [
  "General Info"
];

const YeppuenCard = ({ product }) => {
  const [activeTab, setActiveTab] = useState("General Info");

  return (
    <div className="flex flex-col md:flex-row w-full max-w-full max-h-full bg-white border overflow-hidden">
    <div className="md:w-1/3 h-full w-full p-2 flex justify-center ">
      <img
        src={product.Productimg}
        alt="Product Image"
        className="h-full w-full rounded-lg"
      />
    </div>
    <div className="md:w-2/3 w-full p-3 flex flex-col border">
      <img
        src={product.Productname}
        alt="Product Thumbnail"
        className="h-22 w-64 rounded-lg mb-2 object-contain"
      />
      <div className="flex flex-wrap border-b pb-2">
        {tabs.map((label) => (
          <button
            key={label}
            className={`px-3 py-1 text-sm md:text-base transition duration-300 bg-green-800}`}
            onClick={() => setActiveTab(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-3 text-sm text-gray-700 overflow-y-auto max-h-[60vh]">
        {activeTab === "General Info" && (
          <>
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <h1 className="py-3">{product.work}</h1>
          <ul className="pl-5">
            {product.description.map((item, index) => (
              <li key={index} className="py-1">{item}</li>
            ))}
            </ul>
          </>
        )}
       
      </div>
    </div>
  </div>
  
  );
};

export default YeppuenCard;