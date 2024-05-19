import { Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import DeleteProduct from "./Pages/DeleteProduct";
import GetAllCategories from "./Pages/GetAllCategories";
import GetAllProducts from "./Pages/GetAllProducts";
import GetAllProductsPagination from "./Pages/GetAllProductsPagination";
import GetCategorySmartphone from "./Pages/GetCategorySmartphone";
import GetProductById from "./Pages/GetProductById";
import SearchProduct from "./Pages/SearchProduct";
import Home from "./Pages/features/auth/Home";
import Card from "./Components/Card";
import Login from "./Pages/features/auth/Login";
import PublicRoute from "./Pages/PublicRoute";
import { useState } from "react";
import EditProduct from "./Pages/EditProduct";
import { Layout } from "antd";
import Public from "./Pages/Public";
import RequireAuth from "./Pages/features/auth/RequireAuth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <Routes>
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
      </Routes> */}

      <Routes>
        <Route path="/" element={<Layout />} />

        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<GetAllProducts />} />
          <Route path="find" element={<GetProductById />} />
          <Route path="search" element={<SearchProduct />} />
          <Route path="category" element={<GetAllCategories />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit" element={<EditProduct />} />
          <Route path="delete" element={<DeleteProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
