import React from "react";
import { Link } from "react-router-dom";
import { saleImgTwo } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex items-center justify-start">
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc='https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FSale%20banner%2FFrames%20Sales.webp?alt=media&token=023e7b0b-54fd-4938-a755-5743604e53fb' />
        </Link>
      </div>
    </div>
  );
};

export default Sale;
