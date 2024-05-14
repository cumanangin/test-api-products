import React, { useEffect } from "react";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <div className="flex flex-grow justify-center items-center">
        <div className="">Home</div>
      </div>
    </div>
  );
};
export default Home;
