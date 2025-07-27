import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="CR7 Frames" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img="https://res.cloudinary.com/diisa3hxq/image/upload/v1753519835/bestSellerTwo_dmhxs3.png"
          productName="CR7 Frame"
          oldPrice="12999.00"
          price="7999.00"
          color="White"
          badge={true}
          des="Cristiano Ronaldo's white team shirt symbolizes greatness, leadership, and excellence, representing his dominance and legendary status on the field."
        />
        <Product
          _id="1012"
          img="https://res.cloudinary.com/diisa3hxq/image/upload/v1753519833/bestSellerThree_foxotg.png"
          productName="CR7 Frame"
          oldPrice="12999.00"
          price="7999.00"
          color="White & Yellow"
          badge={false}
          des="Cristiano Ronaldo's white & Yellow team shirt symbolizes greatness, leadership, and excellence, representing his dominance and legendary status on the field."
        />
        <Product
          _id="1013"
          img="https://res.cloudinary.com/diisa3hxq/image/upload/v1753519830/bestSellerFour_rjtwqk.png"
          productName="CR7 Frame"
          oldPrice="12999.00"
          price="7999.00"
          color="Red"
          badge={true}
          des="Cristiano Ronaldo’s red shirt represents passion, power, and determination, embodying his fearless mentality and iconic presence on the football field."
        />
        <Product
          _id="1014"
          img="https://res.cloudinary.com/diisa3hxq/image/upload/v1753519831/bestSellerOne_zy5hrj.png"
          productName="CR7 Frame"
          oldPrice="12999.00"
          price="7999.00"
          color="Yellow"
          badge={false}
          des="Cristiano Ronaldo wears Al Nassr’s yellow shirt, symbolizing pride, passion, and excellence in Saudi Arabian football history."
        />
      </div>
    </div>
  );
};

export default BestSellers;
