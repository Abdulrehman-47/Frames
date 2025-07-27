import React from "react";
import { Link } from "react-router-dom";
import { saleImgTwo } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex items-center justify-start">
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc='https://res.cloudinary.com/diisa3hxq/image/upload/v1753517986/saleImgTwo_zgio6j.webp' />
        </Link>
      </div>
    </div>
  );
};

export default Sale;
