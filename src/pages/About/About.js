import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
      <h1 className="max-w-[600px] text-base text-lightText mb-2 leading-[1.8]">

          <span className="text-primeColor font-semibold text-lg">jerseyframes.pk's</span>{" "}
          The Ultimate Destination for Signed & Unsigned Sports Jersey's

          At Jersey Frames, we bring sports fans closer to their passion by offering a premium collection of signed and unsigned jerseys from top football and cricket players worldwide. Whether you're a die-hard supporter looking for an autographed piece from your favorite athlete or simply want a beautifully framed jersey to showcase your team pride, we've got you covered.

          Every signed item comes with a certificate of authenticity, giving you the confidence to own a genuine piece of sporting history. Whether you're a collector, a fan, or looking for the perfect gift, Jersey Frames delivers the best in sports memorabilia.

           Own a piece of history – Frame your passion with Jersey Frames! 
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
