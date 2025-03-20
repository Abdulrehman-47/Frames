import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="CR7 Frames" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FCR7%20FRAMES%2FUntitled%20design%20(16).png?alt=media&token=ed1daf33-79e4-4e62-982c-6722d0b0c9bd'}
          productName="CR7 Frame "
          price="12999.00"
          color="White"
          badge={true}
          des="Cristiano Ronaldo's white team shirt symbolizes greatness, leadership, and excellence, representing his dominance and legendary status on the field."
        />
        <Product
          _id="1012"
          img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FCR7%20FRAMES%2FUntitled%20design%20(17).png?alt=media&token=66ba5c0a-fd11-47ca-a961-649f4f9cf621'}
          productName="CR7 Frame"
          price="12999.00"
          color="White & Yellow"
          badge={false}
          des="Cristiano Ronaldo's white & Yellow team shirt symbolizes greatness, leadership, and excellence, representing his dominance and legendary status on the field."
        />
        <Product
          _id="1013"
          img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FCR7%20FRAMES%2FUntitled%20design%20(18).png?alt=media&token=792bd7b9-80ea-41e4-bc25-a0220373603e'}
          productName="CR7 Frame"
          price="12999.00"
          color="Red"
          badge={true}
          des="Cristiano Ronaldo’s red shirt represents passion, power, and determination, embodying his fearless mentality and iconic presence on the football field."
        />
        <Product
          _id="1014"
          img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FCR7%20FRAMES%2FUntitled%20design%20(11).png?alt=media&token=a98f73a8-7881-4c53-8b74-2bea0084279b'}
          productName="CR7 Frame"
          price="12999.00"
          color="Yellow"
          badge={false}
          des="Cristiano Ronaldo wears Al Nassr’s yellow shirt, symbolizing pride, passion, and excellence in Saudi Arabian football history."
        />
      </div>
    </div>
  );
};

export default BestSellers;
