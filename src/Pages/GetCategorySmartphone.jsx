import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";

const GetCategorySmartphone = () => {
  const [catSmartphone, setCatSmartphone] = useState([]);

  const getApiCatSmartphone = () => {
    useEffect(() => {
      fetch("https://dummyjson.com/products/category/smartphones")
        .then((res) => res.json())
        .then((data) => {
          setCatSmartphone(data.products), console.log(data.products);
        });
    }, []);
  };
  getApiCatSmartphone();

  return (
    <div>
      <Menu />
      <div>GetCategorySmartphone</div>
      <div className="p-3">
        {catSmartphone.map((catSmartphones) => (
          <li className="list-none pb-3" key={catSmartphones.id}>
            <p>{catSmartphones.id}.</p>{" "}
            <p>
              {catSmartphones.title} - {catSmartphones.brand}
            </p>{" "}
            <img
              src={catSmartphones.thumbnail}
              alt="image not found1"
              width={250}
            />{" "}
            <p>{catSmartphones.description}</p>
            <p>Price : ${catSmartphones.price}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default GetCategorySmartphone;
