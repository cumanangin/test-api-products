import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../Components/Menu";
import Swal from "sweetalert2";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  const [checkDeleted, setCheckDeleted] = useState(false);
  const [deletedOn, setDeletedOn] = useState("");

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = await response.data;
        setProducts(data.products);
        // setProductId(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getApi();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://dummyjson.com/products/${id}`
      );
      const status = await response.status;
      const data = await response.data;
      if (status === 200) {
        setProducts(products.filter((product) => product.id !== id));
        setCheckDeleted(true);
        setDeletedOn(data.deletedOn);
        console.log(data.deletedOn);
      } else {
        setCheckDeleted(false);
        throw new Error("Failed to delete product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSweetAlertDelete = (id) => {
    const text = "Data deleted on ";
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire({
          title: "Deleted!",
          text: text + deletedOn,
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Menu />

      <p className="12pro:text-xs md:text-xl font-bold flex justify-center">
        Delete Product
      </p>

      <div className="flex justify-around">
        <div className="p-5">
          <table className="table-auto">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => handleSweetAlertDelete(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
