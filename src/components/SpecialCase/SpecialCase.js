import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);

  return (
    <div className="fixed top-52 right-2 z-20 flex-col gap-2 hidden md:flex">
      <Link to="/cart">
        <div className="bg-transparent md:bg-white w-20 h-[100px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center md:shadow-testShadow overflow-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-3xl md:text-2xl" />
          </div>
          {/* Hide text on mobile, show on desktop */}
          <p className="text-xs font-semibold font-titleFont hidden md:block">
            View Cart
          </p>
          {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
