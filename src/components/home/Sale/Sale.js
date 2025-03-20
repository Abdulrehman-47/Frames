import React from "react";
import { Link } from "react-router-dom";
import { saleImgTwo } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex items-center justify-start">
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto">
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc='https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FSale%20banner%2FFrames%20Sale.png?alt=media&token=4e6ef5f6-808f-45bc-8590-4fc080b8cbf1' />
        </Link>
      </div>
    </div>
  );
};

export default Sale;
