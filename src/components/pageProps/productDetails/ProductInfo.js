import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [displayPrice, setDisplayPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (productInfo?.price) {
      setDisplayPrice(Number(productInfo.price).toFixed(2));
    }
  }, [productInfo]);

  const handleAddToCart = () => {
    if (!selectedOption) {
      setError("Please select a Frame Type.");
      return;
    }

    setError("");
    dispatch(
      addToCart({
        _id: productInfo._id,
        name: productInfo.productName,
        quantity: 1,
        image: productInfo.img,
        badge: productInfo.badge,
        price: displayPrice,
        colors: productInfo.color,
        frameType: selectedOption,
      })
    );

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setError("");

    if (option === "Randomly") {
      setDisplayPrice((prev) => (Number(prev) + 1000).toFixed(2));
    } else {
      setDisplayPrice(Number(productInfo.price).toFixed(2));
    }
  };

  const isPosterBundle =
    Number(productInfo?._id) >= 2001 && Number(productInfo?._id) <= 2006;

  return (
    <div className="flex flex-col gap-5 relative">
      {/* Popup Message */}
      <div
        className={`fixed top-20 lg:top-48 left-1/2 -translate-x-1/2 right-auto 
          bg-green-600 text-white px-5 py-3 rounded-md shadow-md z-50 
          transition-opacity duration-500 ${
            showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        Item added to cart!
      </div>

      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">Rs {displayPrice}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>

      <p className="font-medium text-lg">
        <span className="font-normal">{isPosterBundle ? "Size:" : "Colors:"}</span>{" "}
        {productInfo.color}
      </p>

      {!isPosterBundle && (
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full p-3 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-md flex justify-between items-center text-lg`}
          >
            <span>{selectedOption || "Frame Type"}</span>
            <span className="ml-2">&#9662;</span>
          </button>

          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-full border border-gray-300 rounded-md bg-white shadow-md z-10">
              <li
                onClick={() => handleOptionSelect("Signature")}
                className="p-3 hover:bg-gray-100 cursor-pointer"
              >
                Signature
              </li>
              <li
                onClick={() => handleOptionSelect("Signatureless")}
                className="p-3 hover:bg-gray-100 cursor-pointer"
              >
                Signatureless
              </li>
              <li
                onClick={() => handleOptionSelect("Randomly")}
                className="p-3 hover:bg-gray-100 cursor-pointer"
              >
                Randomly
              </li>
            </ul>
          )}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {isPosterBundle ? (
        <a
          href={`https://wa.me/923028557208?text=${encodeURIComponent(
            `Hello, I'm interested in purchasing:\n\nProduct: ${productInfo.productName}\nSize: ${productInfo.color}\nPrice: Rs ${displayPrice}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-green-500 hover:bg-green-600 duration-300 text-white text-lg font-titleFont text-center rounded-md"
        >
          Inquire on WhatsApp
        </a>
      ) : (
        <button
          onClick={handleAddToCart}
          className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
        >
          Add to Cart
        </button>
      )}

      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> Frame Collection,
        Jersey frames, Professional Soccer Players.
      </p>
    </div>
  );
};

export default ProductInfo;
