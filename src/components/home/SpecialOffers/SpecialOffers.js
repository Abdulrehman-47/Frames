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
          img={"https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FMessi%20FRAMES%2FUntitled%20design%20(13).png?alt=media&token=d0256416-375a-47ec-8c84-ade20e2006c4"}
          productName="Messi Frame"
          price="12999.00"
          color="White"
          badge={true}
          des="Lionel Messi wears Argentina’s iconic white shirt, representing greatness, legacy, and his unforgettable triumphs in world football history."
        />
        <Product
          _id="1102"
          img={"https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FMessi%20FRAMES%2FUntitled%20design%20(12).png?alt=media&token=1a5e60ee-200e-4bac-ae63-151e4420ef32"}
          productName="Messi Frame"
          price="12999.00"
          color="Dusty Pink"
          badge={true}
          des="Lionel Messi wears a stylish dusty pink shirt, blending elegance and sportiness, making headlines with his iconic fashion choices."
        />
        <Product
          _id="1103"
          img={"https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FMessi%20FRAMES%2FUntitled%20design%20(19).png?alt=media&token=0654f28c-459c-4742-9ea8-7d5b622175ac"}
          productName="Messi Frame"
          price="12999.00"
          color="Light Blue"
          badge={true}
          des="Lionel Messi wears a light blue Caribbean shirt, radiating a relaxed yet stylish vibe, blending football excellence with tropical elegance."
        />
        <Product
          _id="1104"
          img={"https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FMessi%20FRAMES%2FUntitled%20design%20(20).png?alt=media&token=87427155-bf1a-43c4-9129-ee8f0edc4979"}
          productName="Messi Frame"
          price="13999.00"
          color="Navy Blue"
          badge={true}
          des="Lionel Messi dons a navy blue UNICEF shirt, showcasing his commitment to charity, leadership, and excellence both on and off the field."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
