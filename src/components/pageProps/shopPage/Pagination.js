import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";

const categories = {
  bestSeller: [1003,1002,1001,1004,],
  newArrivals: [1010,1011,1012,1013,1014],
  featured: [ 1005,1006,], // Ensure order is maintained
};

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
    </>
  );
};

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const [filteredItems, setFilteredItems] = useState(paginationItems);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
    setItemOffset(newOffset);
    setItemStart(newOffset + 1);
  };

  const handleFilterChange = (category, label) => {
    setSelectedCategory(label);
    if (category === "All") {
      setFilteredItems(paginationItems);
    } else {
      const categoryIds = categories[category]; // Get the exact order of IDs
      const filtered = paginationItems
        .filter((item) => categoryIds.includes(item._id))
        .sort((a, b) => categoryIds.indexOf(a._id) - categoryIds.indexOf(b._id)); // Sort by category order

      setFilteredItems(filtered);
    }
    setItemOffset(0);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      {/* Sort by Dropdown */}
      <div className="flex items-center gap-2 md:gap-6 mb-8 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Sort by:</label>
          
          {/* Custom Dropdown */}
          <div
            className="relative w-32 md:w-52 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="w-full border-[1px] border-gray-200 py-2 px-4 text-primeColor text-base block focus-within:outline-none focus-visible:border-primeColor transition-all duration-300 ease-in-out flex justify-between items-center">
              <span>{selectedCategory}</span>
              <div
                className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </div>
            </div>

            {/* Dropdown List */}
            {isDropdownOpen && (
              <ul className="absolute left-0 top-12 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <li
                  onClick={() => handleFilterChange("All", "ALL")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  ALL
                </li>
                <li
                  onClick={() => handleFilterChange("bestSeller", "Messi")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Messi
                </li>
                <li
                  onClick={() => handleFilterChange("newArrivals", "CR7")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  CR7
                </li>
                <li
                  onClick={() => handleFilterChange("featured", "Mbappe")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Mbappe
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10 mb-8">
        <Items currentItems={currentItems} />
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart} to {Math.min(endOffset, filteredItems.length)} of {filteredItems.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
