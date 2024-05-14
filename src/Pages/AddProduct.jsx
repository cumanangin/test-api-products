import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({ title: "" });
  const [checkAdded, setCheckAdded] = useState(false);

  const [listAddedProduct, setListAddedProduct] = useState([]);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
    // console.log({[name] : value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newProduct.title === "") {
        console.log("Data kosong, tolong input data");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Input Data!",
        });
      } else {
        const response = await axios.post(
          "https://dummyjson.com/products/add",
          newProduct,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.data;
        setListAddedProduct([...listAddedProduct, data]);
        setNewProduct({ title: "" });
        // console.log(data.title);
        setCheckAdded(true);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(newProduct.title);
      }
    } catch (error) {
      console.error(error);
      setCheckAdded(false);
    }
  };

  return (
    <div>
      <Menu />
      <p className="12pro:text-xs md:text-xl font-bold flex justify-center">
        Add Products
      </p>
      <div className="flex justify-center 12pro:text-xs md:text-xl">
        <div className="flex px-2 py-10">
          <span className="pr-2 flex items-center">Search</span>
          <form onSubmit={handleSubmit} className="flex items-center">
            <div className="p-3">
              <input
                className="p-1 bg-green-50 border border-black text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
                type="text"
                name="title"
                value={newProduct.title}
                onChange={handleChangeInput}
                placeholder="Add data"
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="12pro:text-xs md:text-xl ">
        {listAddedProduct.map((listAddedProducts, index) => (
          <li className="list-none p-3 flex justify-center" key={(index += 1)}>
            <div className="">
              {(index += 1)}. {listAddedProducts.title}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AddProduct;
