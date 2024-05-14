import { Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";
import Card from "../Components/Card";
import { FaArrowUp } from "react-icons/fa";

const GetAllProducts = () => {
  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const getApi = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      const data = response.data;
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const arrayDataItems = products.map((product) => (
    <li key={product.id}>
      {product.id}. {product.title}{" "}
      <img src={product.thumbnail} alt="image not found1" />{" "}
      <img src={product.images[0]} alt="image not found2" width={350} />{" "}
      Description : {product.description}. Price : ${product.price} Discount :{" "}
      {product.discountPercentage} Rating : {product.rating} Stock :{" "}
      {product.stock} Brand : {product.brand} Category : {product.category}
    </li>
  ));

  return (
    <div id="top">
      <Menu />
      <p className="12pro:text-xs md:text-xl font-bold flex justify-center">
        Get All Products
      </p>
      <div className="flex justify-end px-3">
        <button
          type="button"
          class="bg-blue-400 p-1 rounded-lg hover:shadow-md hover:bg-blue-500 hover:text-white"
        >
          <Link
            to="/add"
            className="12pro:text-xs md:text-base px-3 font-medium"
          >
            Add +
          </Link>
        </button>
      </div>
      <div className="">
        <ul className="grid 12pro:grid-cols-3 md:grid-cols-4 12pro:justify-items-center 12pro:items-center 12pro:gap-4 md:gap-9">
          {products.map((product) => (
            <li key={product.id}>
              <Card
                thumbnail={product.thumbnail}
                title={product.title}
                price={product.price}
                brand={product.brand}
                discountPercentage={product.discountPercentage}
                stock={product.stock}
                rating={product.rating}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end p-5">
        <a
          href="#top"
          className="rounded-full shadow-md p-3 hover:shadow-slate-500 duration-500"
        >
          <FaArrowUp />
        </a>
      </div>
      <div className="flex justify-center">
        <Pagination defaultCurrent={1} total={30} />
      </div>
    </div>
  );
};

export default GetAllProducts;
