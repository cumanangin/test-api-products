import { Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import DeleteProduct from "./Pages/DeleteProduct";
import GetAllCategories from "./Pages/GetAllCategories";
import GetAllProducts from "./Pages/GetAllProducts";
import GetAllProductsPagination from "./Pages/GetAllProductsPagination";
import GetCategorySmartphone from "./Pages/GetCategorySmartphone";
import GetProductById from "./Pages/GetProductById";
import SearchProduct from "./Pages/SearchProduct";
import Home from "./Pages/Home";
import Card from "./Components/Card";
import Login from "./Pages/Login";
import PublicRoute from "./Pages/PublicRoute";
import { useState } from "react";
import EditProduct from "./Pages/EditProduct";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <GetAllProducts /> */}
      {/* <GetProductById /> */}
      {/* <GetCategorySmartphone/> */}
      {/* <GetAllCategories /> */}
      {/* <AddProduct /> */}
      {/* <SearchProduct /> */}
      {/* <DeleteProduct /> */}
      {/* <GetAllProductsPagination /> belum jadi, skip */}
      {/* <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<GetAllProducts />} />
        <Route path="/find" element={<GetProductById />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/category" element={<GetAllCategories />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
      </Routes> */}
      {/* <Card /> */}
      {/* <Login /> */}
      {/* <EditProduct /> */}
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<GetAllProducts />} />
            <Route path="/find" element={<GetProductById />} />
            <Route path="/search" element={<SearchProduct />} />
            <Route path="/category" element={<GetAllCategories />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit" element={<EditProduct />} />
            <Route path="/delete" element={<DeleteProduct />} />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
