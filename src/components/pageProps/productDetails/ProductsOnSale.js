import React from "react";
import { SplOfferData } from "../../../constants";

const ProductsOnSale = () => {
  return (
    <div className="hidden md:block">
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px] ml-10">
        Top Selling
      </h3>

      <div className="flex flex-col gap-2">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src={item.img} alt={item.productName} />
            </div>
            <div className="flex flex-col gap-1 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-black-600">Rs 7,999.00</p>
                <p className="text-sm line-through text-gray-500">Rs 12,999.00</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
