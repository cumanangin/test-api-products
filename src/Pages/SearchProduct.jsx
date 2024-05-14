import axios from "axios";
import React, { useState } from "react";
import Menu from "../Components/Menu";
import CardSearch from "../Components/CardSearch";
import { IoSearchSharp } from "react-icons/io5";

const SearchProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResult] = useState([]);

  const [errorMsg, setErrorMsg] = useState("");

  const searchChangeInput = (e) => {
    setSearchQuery(e.target.value);
    // console.log(e.target.value);
  };

  const searchSubmit = async (e) => {
    e.preventDefault();
    // try{
    //     const response = await axios.get('https://dummyjson.com/products/search?q=${searchQuery}')
    //     const data = await response.json()
    //     // setSearchResult(data)
    //     console.log(data);
    // }catch(error){
    //     console.error(error);
    // }
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      const query = await response.data;
      setSearchResult(query.products);
      // console.log(query.products);
      setSearchQuery("");
    } catch (error) {
      console.error(error);
      setErrorMsg("Product not found!");
    }
  };

  return (
    <div>
      <Menu />
      <p className="12pro:text-xs md:text-xl font-bold flex justify-center">
        Search Products
      </p>
      <div className="12pro:text-xs md:text-xl flex justify-center">
        <div>
          <div className="flex px-2 py-10">
            <div className="flex">
              <span className="pr-2 flex items-center">Search</span>
              <form onSubmit={searchSubmit} className="flex gap-x-2">
                <input
                  type="text"
                  onChange={searchChangeInput}
                  value={searchQuery}
                  placeholder="Search"
                  className="p-1 bg-green-50 border border-black text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
                />
                <div className="flex items-center px-2">
                  <button type="submit">
                    <IoSearchSharp />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div>
            {searchResults.map((searchResult) => (
              <li className="list-none" key={searchResult.id}>
                {searchResult.title}{" "}
                <img
                  src={searchResult.images[0]}
                  alt="image not found"
                  width={250}
                />
              </li>
            ))}
          </div> */}
        </div>
      </div>
      <div className="grid 12pro:grid-cols-3 md:grid-cols-4 12pro:justify-items-center 12pro:items-center">
        {errorMsg && (
          <p className="flex justify-center text-red-500 font-medium">
            {errorMsg}
          </p>
        )}
        {searchResults.map((searchResult) => (
          <li className="list-none py-5" key={searchResult.id}>
            <CardSearch
              title={searchResult.title}
              thumbnail={searchResult.thumbnail}
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default SearchProduct;
