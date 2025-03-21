import React from "react";
import { FaFacebook, FaYoutube, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F5F3] py-8"> {/* Reduced padding */}
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-6">
        <div className="col-span-2">
          <FooterListTitle title="Follow Us" />
          <div className="flex flex-col gap-4"> {/* Reduced gap */}
            <p className="text-base w-full xl:w-[80%]">
            Stay connected with us on social media! Follow us on Instagram, Facebook, and WhatsApp to get the latest updates and exclusive content.
            </p>
            <ul className="flex items-center gap-3"> {/* Increased gap for better spacing */}
              <a
                href="https://www.instagram.com/jerseyframes.pk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-xl rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaInstagram />
                </li>
              </a>
              <a
                href="https://wa.me/+923028557208"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-xl rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaWhatsapp />
                </li>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-8 h-8 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-xl rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
