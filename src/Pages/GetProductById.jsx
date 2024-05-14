import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";
import Card from "../Components/Card";
import { IoSearchSharp } from "react-icons/io5";

const GetProductById = () => {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [showProduct, setShowProduct] = useState(false);

  const getApiById = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.data;
      setProduct(data);
      console.log(data);
      setErrorMsg(null);
      setShowProduct(true);
      setProductId("");
    } catch (error) {
      console.error(error);
      setErrorMsg("Product not found!");
      setProduct(null);
      setShowProduct(false);
      setProductId("");
    }
  };

  const handleChangeInput = (e) => {
    setProductId(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productId == "" || productId === " ") {
      setErrorMsg("Please insert data!");
      console.log("input data");
    } else {
      getApiById();
    }
  };

  return (
    <div className="">
      <Menu />
      <p className="12pro:text-xs md:text-xl font-bold flex justify-center">
        Get Product By Id
      </p>
      <div className="12pro:text-xs md:text-xl">
        <div className="flex justify-center px-2 py-10">
          <div className="flex justify-center">
            <label htmlFor="" className="flex items-center">
              Search id{" "}
            </label>
            <form onSubmit={handleSubmit} className="px-2 flex">
              <input
                type="text"
                name="id"
                value={productId}
                onChange={handleChangeInput}
                className="p-1 bg-green-50 border border-black text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
                placeholder="Search id"
              />
              <div className="flex items-center px-2">
                <button>
                  <IoSearchSharp />
                </button>
              </div>
            </form>
          </div>
        </div>

        {errorMsg && (
          <p className="flex justify-center text-red-500 font-medium">
            {errorMsg}
          </p>
        )}
        {showProduct && product && (
          // <div>
          //   <div>
          //     <h1 className="text-2lg">{product.title}</h1>
          //     <h1>{product.brand}</h1>
          //     <div>
          //       <img
          //         src={product.thumbnail}
          //         alt="image not found2"
          //         width={350}
          //       />
          //     </div>
          //   </div>
          //   <div className="pt-3">
          //     <div>
          //       <p>Description : </p>
          //       <p>{product.description}</p>
          //     </div>
          //     <div>
          //       <h1>Price : ${product.price}</h1>
          //     </div>
          //     <div>
          //       <h1>Rating : {product.rating}</h1>
          //     </div>
          //   </div>
          // </div>
          <div className="flex justify-center">
            <Card
              title={product.title}
              brand={product.brand}
              thumbnail={product.thumbnail}
              price={product.price}
              discountPercentage={product.discountPercentage}
              stock={product.stock}
              rating={product.rating}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetProductById;
