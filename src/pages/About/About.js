import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[700px] text-base text-lightText mb-6 leading-7 space-y-4">
          <p className="text-xl font-semibold text-primeColor mb-2">JerseyFrames.pk</p>
          <p>
            At <strong>JerseyFrames.pk</strong>, we craft full-size framed jerseys that bring your favorite sports legends to life — complete with real, hand-signed autographs done by our professional in-house signature team.
          </p>
          <p>
            Every jersey is framed in a premium 18x24 setup, featuring a complete shirt, carefully styled and signed using marker — giving it the feel and flair of authentic memorabilia, without the sky-high price tag.
          </p>

          <hr className="my-4 border-gray-300" />

          <p className="text-lg font-semibold">What Makes Us Stand Out</p>
          <ul className="list-disc pl-5">
            <li>✅ Full-Size Jerseys — not cutouts or half-displays</li>
            <li>✅ Hand-Signed by Our Signature Team — using permanent marker for a real, bold finish</li>
            <li>✅ Professionally Framed (18x24 inches) — clean, durable, and ready to hang</li>
            <li>✅ Built for Fans — affordable, striking, and passion-driven</li>
            <li>✅ Nationwide Delivery Across Pakistan</li>
          </ul>

          <hr className="my-4 border-gray-300" />

          <p className="text-lg font-semibold">⚠ Note on Authenticity</p>
          <p>
            While our products are not officially licensed and the signatures are not from the original athletes, each jersey is hand-signed by professionals who specialize in signature-style presentation — giving you the look and presence of a high-end piece at an accessible price.
          </p>

          <hr className="my-4 border-gray-300" />

          <p className="text-lg font-semibold">🖤 Built for True Fans</p>
          <p>
            JerseyFrames.pk was created for those who want to feel closer to the game. Whether you’re a lifelong fan or gifting someone special, our jersey frames let you honor the players you love — in style.
          </p>
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
