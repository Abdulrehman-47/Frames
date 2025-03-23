import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();
  const products = useSelector((state) => state.orebiReducer.products);

  useEffect(() => {
    const ResponsiveMenu = () => {
      setShowMenu(window.innerWidth >= 667);
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    return () => window.removeEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-[#04243c] sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/">
            <Image className="w-20 object-cover" imgSrc='https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FLOGO%2Flogo%20lighte.png?alt=media&token=15ed99ba-a0af-498e-9c8a-9697c6f72408' />
          </Link>

          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    to={link}
                    state={{ data: location.pathname.split("/")[1] }}
                    className={({ isActive }) =>
                      `flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base ${
                        isActive ? "text-white font-bold underline decoration-2" : "text-white"
                      } hover:underline underline-offset-[4px] decoration-[1px] hover:text-gray-400 md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0`
                    }
                  >
                    <li>{title}</li>
                  </NavLink>
                ))}
              </motion.ul>
            )}

            {/* Cart Icon (Only for Mobile Screens, Right Side) */}
            <Link to="/cart" className="absolute right-16 top-6 md:hidden">
              <div className="relative">
              <RiShoppingCart2Fill className="text-2xl text-white" />

                {products.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    {products.length}
                  </span>
                )}
              </div>
            </Link>

            <HiMenuAlt2
  onClick={() => setSidenav(!sidenav)}
  className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4 text-white"
/>


 {/* Mobile SideNav */}
{sidenav && (
  <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-50 flex">
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-[75%] max-w-sm h-full bg-[#04243c] text-white shadow-lg flex flex-col p-6"
    >
      {/* Logo */}
      <div className="flex justify-between items-center">
        <img
          className="w-32"
          src="https://firebasestorage.googleapis.com/v0/b/trakkerz-c2667.appspot.com/o/Jersey%20Framespk%2FLOGO%2Flogo%20lighte.png?alt=media&token=15ed99ba-a0af-498e-9c8a-9697c6f72408"
          alt="Logo"
        />
        {/* Close Button */}
        <button
          onClick={() => setSidenav(false)}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition duration-300"
        >
          <MdClose className="text-2xl text-white" />
        </button>
      </div>

      {/* Navigation Items */}
      <ul className="mt-6 space-y-4">
        {navBarList.map(({ _id, title, link }) => (
          <li key={_id} className="border-b border-gray-700 pb-2">
            <NavLink
              to={link}
              state={{ data: location.pathname.split("/")[1] }}
              onClick={() => setSidenav(false)}
              className={({ isActive }) =>
                `block text-lg font-medium px-2 py-3 rounded-lg transition ${
                  isActive ? "text-gray-400 font-bold" : "text-white"
                } hover:bg-gray-800 hover:text-gray-300`
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
)}


          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
