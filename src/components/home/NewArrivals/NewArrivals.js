import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>

      <div className="px-2">
          <Product
            _id="2001"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753518551/Poster_1_tqyswt.png'}
            productName="Single Poster"
            price="300.00"
            color="4x6 & A4"
            badge={true}
            des="Single Signed Poster, Available in standard A4 size (4x6). Each poster is personally signed, making it a unique collectible item or a perfect gift for fans and collectors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="2002"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753518553/Poster_2_znfysv.png'}
            productName="Poster Bundle 1"
            price="750.00"
            color="4: 4x6 posters"
            badge={true}
            des="Get more for less with Bundle 1, featuring 4 individually signed posters in a compact 4x6 inch size. Perfect for decorating your space, gifting, or starting your own signed poster collection."
          />
        </div>
        <div className="px-2">
          <Product
            _id="2003"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753518554/Poster_3_cxhfas.png'}
            productName="Poster Bundle 2"
            price="1500.00"
            color="4: A4 posters"
            badge={true}
            des="Elevate your collection with 4 signed A4 posters (8.3 x 11.7 inches). Perfect for collectors or as a unique gift, this bundle offers high-quality signed memorabilia at great value."
          />
        </div>
        <div className="px-2">
          <Product
            _id="2004"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753518556/Poster_4_uwpj8o.png'}
            productName="Poster Bundle 3"
            price="3000.00"
            color="4:A4 & 4:4x6"
            badge={false}
            des="Get the best of both worlds with Bundle 3, including 4 A4 signed posters and 4 signed 4x6 posters. This bundle offers a variety of sizes for those who want to expand their collection with a mix of large and compact signed memorabilia."
          />
        </div>
        <div className="px-2">
          <Product
            _id="2005"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753518553/Poster_2_znfysv.png'}
            productName="Poster Bundle 4"
            price="3000.00"
            color="10: 4x6 posters"
            badge={false}
            des="Expand your collection with Bundle 4, featuring 10 signed 4x6 posters. This bundle offers a variety of signed memorabilia at an incredible value, perfect for collectors, gifting, or decorating your space with unique, hand-signed pieces."
          />
        </div>

        <div className="px-2">
          <Product
            _id="2006"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753518551/Poster_1_tqyswt.png'}
            productName="Poster Bundle 5"
            price="4500.00"
            color="10:A4 posters"
            badge={false}
            des="Take your collection to the next level with Bundle 5, featuring 10 signed A4 posters. Each 8.3 x 11.7 inch poster is hand-signed for authenticity, making this bundle a must-have for serious collectors or as an extraordinary gift Poster"
          />
        </div>

        <div className="px-2">
          <Product
            _id="100001"
            img="https://res.cloudinary.com/diisa3hxq/image/upload/v1753519831/bestSellerOne_zy5hrj.png"
            productName="CR7 Frame"
            oldPrice="12999.00"
            price="7999.00"
            color="Yellow"
            badge={true}
            des="Cristiano Ronaldo wears Al Nassr’s yellow shirt, symbolizing pride, passion, and excellence in Saudi Arabian football history."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753519288/spfTwo_nyg4kn.png'}
            productName="Messi Frame"
            oldPrice="12999.00"
            price="7999.00"
            color="White"
            badge={true}
            des="Lionel Messi wears Argentina’s iconic white shirt, representing greatness, legacy, and his unforgettable triumphs in world football history."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753519285/spfOne_wpwuwm.png'}
            productName="Messi Frame"
            oldPrice="12999.00"
            price="7999.00"
            color="Dusty Pink"
            badge={true}
            des="Lionel Messi wears a stylish dusty pink shirt, blending elegance and sportiness, making headlines with his iconic fashion choices.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753520726/Mbappe_2_ekhqly.png'}
            productName="Mbappe Frame"
              oldPrice="12999.00"
            price="7999.00"
            color="Orange"
            badge={false}
            des="Kylian Mbappé shines in an orange shirt, showcasing his dynamic style, confidence, and electrifying presence on and off-field."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={'https://res.cloudinary.com/diisa3hxq/image/upload/v1753531142/Untitled_design_15_yt2ggt.png'}
            productName="Davied Beckham"
              oldPrice="12999.00"
            price="7999.00"
            color="Black"
            badge={false}
            des="David Beckham looks effortlessly stylish in a black shirt, embodying elegance, confidence, and timeless fashion both on and off the field."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
