import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../pageProps/Breadcrumbs";

// Define categories using only allowed IDs (2001 to 2006)
const categories = {
  signed: [2001],
  bundle1: [2002],
  bundle2: [2003],
  bundle3: [2004],
  bundle4: [2005],
  bundle5: [2006],
};

const Poster = () => {
  const itemsPerPage = 12;
  const location = useLocation();
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  // Filter allowed items between IDs 2001 and 2006
  const allowedItems = paginationItems.filter(
    (item) => item._id >= 2001 && item._id <= 2006
  );

  const [filteredItems, setFilteredItems] = useState(allowedItems);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Posters");
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

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
    if (category === "all") {
      setFilteredItems(allowedItems);
    } else {
      const categoryIds = categories[category];
      const filtered = allowedItems
        .filter((item) => categoryIds.includes(item._id))
        .sort((a, b) => categoryIds.indexOf(a._id) - categoryIds.indexOf(b._id));
      setFilteredItems(filtered);
    }
    setItemOffset(0);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Posters" prevLocation={prevLocation} />

      <div className="w-full h-full flex pb-20 gap-6 justify-start">
        <div className="w-[20%] lgl:w-[13%] hidden mdl:inline-flex h-full">
          {/* Optional sidebar */}
        </div>

        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-8">
          <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-base text-[#767676] relative">
              <label className="block">Filter by:</label>
              <div
                className="relative w-40 md:w-60 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="w-full border border-gray-200 py-2 px-4 text-primeColor text-base block focus:outline-none flex justify-between items-center">
                  <span>{selectedCategory}</span>
                  <div
                    className={`transform transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </div>
                </div>
                {isDropdownOpen && (
                  <ul className="absolute left-0 top-12 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <li
                      onClick={() => handleFilterChange("all", "All Posters")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      All Posters
                    </li>
                    <li
                      onClick={() => handleFilterChange("signed", "Signed Posters")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Single Posters
                    </li>
                    <li
                      onClick={() => handleFilterChange("bundle1", "Bundle 1")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Bundle 1
                    </li>
                    <li
                      onClick={() => handleFilterChange("bundle2", "Bundle 2")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Bundle 2
                    </li>
                    <li
                      onClick={() => handleFilterChange("bundle3", "Bundle 3")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Bundle 3
                    </li>
                    <li
                      onClick={() => handleFilterChange("bundle4", "Bundle 4")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Bundle 4
                    </li>
                    <li
                      onClick={() => handleFilterChange("bundle5", "Bundle 5")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Bundle 5
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10 mb-8">
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
          </div>

          <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
            <ReactPaginate
              nextLabel=""
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel=""
              pageLinkClassName="w-9 h-9 border border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
              pageClassName="mr-6"
              containerClassName="flex text-base font-semibold font-titleFont py-10"
              activeClassName="bg-black text-white"
            />
            <p className="text-base font-normal text-lightText">
              Products from {itemStart} to{" "}
              {Math.min(endOffset, filteredItems.length)} of{" "}
              {filteredItems.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
