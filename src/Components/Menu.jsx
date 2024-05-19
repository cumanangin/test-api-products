import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidFileFind, BiCategory, BiSolidCategory } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { FaBoxOpen, FaSearch, FaHome, FaEdit } from "react-icons/fa";
import Logout from "../assets/logout.png";
import { IoMdAddCircle, IoIosLogOut } from "react-icons/io";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { apiSlice } from "../app/api/apiSlice";
import { logOut } from "../Pages/features/auth/authSlice";
import { useDispatch } from "react-redux";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(true);
    if (showSidebar === true) {
      setShowSidebar(false);
    }
  };

  const sidebarIcons = [
    {
      icon: <FaHome size={15} />,
      path: "/home",
    },
    {
      icon: <FaBoxOpen size={15} />,
      path: "/products",
    },
    {
      icon: <BiSolidFileFind size={15} />,
      path: "/find",
    },
    {
      icon: <FaSearch size={15} />,
      path: "/search",
    },
    {
      icon: <BiSolidCategory size={15} />,
      path: "/category",
    },
    {
      icon: <IoMdAddCircle size={15} />,
      path: "/add",
    },
    {
      icon: <FaEdit size={15} />,
      path: "/edit",
    },
    {
      icon: <RiDeleteBack2Fill size={15} />,
      path: "/delete",
    },
  ];

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    // <div className="flex justify-end 12pro:text-[8px] md:text-base">
    //   <ul className="flex p-3 gap-x-2 ">
    //     <li className="hover:text-blue-300">
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li className="hover:text-blue-300">
    //       <Link to="/products">Products</Link>
    //     </li>
    //     <li className="hover:text-blue-300">
    //       <Link to="/find">Find Product by Id</Link>
    //     </li>
    //     <li className="hover:text-blue-300">
    //       <Link to="/search">Search Product</Link>
    //     </li>
    //     <li className="hover:text-blue-300">
    //       <Link to="/category">Categories</Link>
    //     </li>
    //     <li className="hover:text-blue-300">
    //       <Link to="/add">Add Product</Link>
    //     </li>
    //   </ul>
    // </div>
    <>
      {showSidebar ? (
        <div className="flex justify-end ">
          <div className="ease-in-out duration-300 12pro:py-2 hover:cursor-pointer flex ">
            <div className="flex">
              {/* div for icon sidebar */}
              <ul className="flex">
                {sidebarIcons.map((itemIcons, index) => {
                  //const Icons = itemIcons.icon;
                  return (
                    <div>
                      <li
                        key={index}
                        className="hover:cursor-pointer hover:duration-200"
                      >
                        <div className="flex p-3">
                          <Link to={itemIcons.path}>{itemIcons.icon}</Link>
                        </div>
                      </li>
                    </div>
                  );
                })}
                <div onClick={logout} className="flex p-3 items-center">
                  <img src={Logout} width={15} />
                </div>
              </ul>
              <div className="flex p-3">
                <ImCancelCircle onClick={handleSidebar} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-end p-3">
          <div className="flex justify-end items-center ease-in duration-300 hover:cursor-pointer ">
            <GiHamburgerMenu onClick={handleSidebar} />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
