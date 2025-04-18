import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          
          {/* Search Box - Centered & Added Margin on Mobile */}
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl lg:mx-auto mb-4 md:mb-0">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] placeholder:text-center text-center"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div className="w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer">
                {filteredProducts.map((item) => (
                  <div
                    onClick={() =>
                      navigate(
                        `/product/${item.productName.toLowerCase().split(" ").join("")}`,
                        { state: { item: item } }
                      ) & setSearchQuery("")
                    }
                    key={item._id}
                    className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                  >
                    <img className="w-24" src={item.img} alt="productImg" />
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-lg">{item.productName}</p>
                      <p className="text-xs">{item.des}</p>
                      <p className="text-sm">
                        Price: <span className="text-primeColor font-semibold">Rs {item.price}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Icon - Increased Size */}
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="w-7 h-7" />
              <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                {products.length > 0 ? products.length : 0}
              </span>
            </div>
          </Link>
          
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
