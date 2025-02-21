import React from "react";
import { block3Data } from "../../Data/data";

const Block3 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {block3Data.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-[22.5rem] h-[32rem] flex flex-col justify-between bg-white rounded-lg shadow-md p-4"
        >
          <div className="h-[80%]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="text-center mt-2 h-[20%] flex flex-col justify-center">
            <h3 className="text-2xl">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.rating}</p>
            <p className="text-sm text-gray-500">{item.segment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block3;
