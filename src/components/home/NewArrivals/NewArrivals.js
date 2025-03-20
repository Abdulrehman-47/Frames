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
            _id="100001"
            img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FCR7%20FRAMES%2FUntitled%20design%20(11).png?alt=media&token=a98f73a8-7881-4c53-8b74-2bea0084279b'}
            productName="CR7 Frame"
            price="12999.00"
            color="Yellow"
            badge={true}
            des="Cristiano Ronaldo wears Al Nassr’s yellow shirt, symbolizing pride, passion, and excellence in Saudi Arabian football history."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FMessi%20FRAMES%2FUntitled%20design%20(13).png?alt=media&token=d0256416-375a-47ec-8c84-ade20e2006c4'}
            productName="Messi Frame"
            price="12999.00"
            color="White"
            badge={true}
            des="Lionel Messi wears Argentina’s iconic white shirt, representing greatness, legacy, and his unforgettable triumphs in world football history."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FMessi%20FRAMES%2FUntitled%20design%20(12).png?alt=media&token=1a5e60ee-200e-4bac-ae63-151e4420ef32'}
            productName="Messi Frame"
            price="12999.00"
            color="Dusty Pink"
            badge={true}
            des="Lionel Messi wears a stylish dusty pink shirt, blending elegance and sportiness, making headlines with his iconic fashion choices.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FNew%20Arrivals%2FUntitled%20design%20(14).png?alt=media&token=6d8ab0f9-747e-4981-bbb4-f98558ca4cfa'}
            productName="Mbappe Frame"
            price="12999.00"
            color="Orange"
            badge={false}
            des="Kylian Mbappé shines in an orange shirt, showcasing his dynamic style, confidence, and electrifying presence on and off-field."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={'https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FProducts%20iamges%2FNew%20Arrivals%2FUntitled%20design%20(15).png?alt=media&token=65a6bb7d-b90f-4329-9fe5-494b0f011302'}
            productName="Davied Beckham"
            price="13999.00"
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
