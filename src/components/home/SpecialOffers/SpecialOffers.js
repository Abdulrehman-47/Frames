import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Messi Frames" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={"https://res.cloudinary.com/diisa3hxq/image/upload/v1753519288/spfTwo_nyg4kn.png"}
          productName="Messi Frame"
            oldPrice="12999.00"
            price="7999.00"
          color="White"
          badge={true}
          des="Lionel Messi wears Argentina’s iconic white shirt, representing greatness, legacy, and his unforgettable triumphs in world football history."
        />
        <Product
          _id="1102"
          img={"https://res.cloudinary.com/diisa3hxq/image/upload/v1753519285/spfOne_wpwuwm.png"}
          productName="Messi Frame"
            oldPrice="12999.00"
            price="7999.00"
          color="Dusty Pink"
          badge={true}
          des="Lionel Messi wears a stylish dusty pink shirt, blending elegance and sportiness, making headlines with his iconic fashion choices."
        />
        <Product
          _id="1103"
          img={"https://res.cloudinary.com/diisa3hxq/image/upload/v1753519286/spfThree_mqdsbv.png"}
          productName="Messi Frame"
            oldPrice="12999.00"
            price="7999.00"
          color="Light Blue"
          badge={true}
          des="Lionel Messi wears a light blue Caribbean shirt, radiating a relaxed yet stylish vibe, blending football excellence with tropical elegance."
        />
        <Product
          _id="1104"
          img={"https://res.cloudinary.com/diisa3hxq/image/upload/v1753519284/spfFour_w4ghut.png"}
          productName="Messi Frame"
            oldPrice="12999.00"
            price="7999.00"
          color="Navy Blue"
          badge={true}
          des="Lionel Messi dons a navy blue UNICEF shirt, showcasing his commitment to charity, leadership, and excellence both on and off the field."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
