import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";
import axios from "axios";
import Swal from "sweetalert2";

const EditProduct = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState({ title: "" });
  const [editedProductId, setEditedProductId] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const [isEdited, setEdited] = useState(false);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      setEdited(false);
      console.log(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  // axios
  //   .get("https://dummyjson.com/products")
  //   .then((response) => {
  //     setProducts(response.data.products);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  const handleClick = (id, title) => {
    setEditedProductId(id);
    setEditedProduct({ title });
    setIsClicked(true);
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setEditedProduct({ title: value });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const text1 = "Edit product title to ";
    try {
      const response = await axios.put(
        `https://dummyjson.com/products/${editedProductId}`,
        editedProduct
      );
      const data = response.data;
      setIsClicked(false);
      setEdited(true);
      console.log(data);
      // Ambil data produk terbaru setelah proses edit selesai
      // const response = await axios.get("https://dummyjson.com/products");
      // setProducts(response.data.products);
      Swal.fire({
        position: "center",
        icon: "success",
        title: text1 + editedProduct.title,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Menu />
      <p className="12pro:text-xs md:text-xl font-bold flex justify-center">
        Edit Product
      </p>
      <div className="py-10">
        <ul className="grid 12pro:grid-cols-3 md:grid-cols-4 12pro:justify-items-center 12pro:items-center 12pro:gap-4 md:gap-9">
          {products.map((product) => (
            <li key={product.id}>
              <p
                onClick={() => handleClick(product.id, product.title)}
                className="hover:cursor-pointer"
              >
                {product.title}
              </p>
              {isClicked && editedProductId === product.id && (
                <form onSubmit={handleEdit}>
                  <input
                    type="text"
                    value={editedProduct.title}
                    onChange={handleChangeInput}
                    className="p-1 bg-green-50 border border-black text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                  <button type="submit">Edit</button>
                </form>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EditProduct;
