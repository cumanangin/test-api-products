import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";
import Badge from "../Components/Badge";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) =>
        // console.log(data)
        setCategories(data)
      );
  }, []);

  return (
    <div>
      <Menu />
      <p className="12pro:text-xs md:text-xl font-bold flex justify-center">
        Get All Categories
      </p>
      <div className="grid 12pro:grid-cols-3 md:grid-cols-4 12pro:justify-items-center 12pro:items-center 12pro:gap-2 md:gap-3 py-10">
        {Array.isArray(categories)
          ? categories.map((element) => {
              return (
                <li className="list-none flex" key={element}>
                  <Badge category={element} />
                </li>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default GetAllCategories;
