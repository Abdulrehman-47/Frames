import React from "react";
import { MdLocalShipping } from "react-icons/md";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex justify-center items-center">
        <div className="flex items-center gap-2 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl">
            <MdLocalShipping />
          </span>
          <p className="text-lg md:text-Xl font-bold text-center text-primeColor">
            SHIPPING ALL OVER PAKISTAN
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
