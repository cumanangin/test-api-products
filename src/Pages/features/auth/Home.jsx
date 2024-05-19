import React, { useEffect } from "react";
import Menu from "../../../Components/Menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentAvatar,
  selectCurrentToken,
  selectCurrentUser,
} from "./authSlice";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const email = useSelector(selectCurrentUser);
  // const username = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  console.log(token);
  const decode = jwtDecode(token);
  console.log(decode);
  const avatar = useSelector(selectCurrentAvatar);

  const greetings = email ? `Halo, ${email}!` : "Hi!";
  // const greetings = username ? `Halo, ${username}!` : "Hi!";

  const tokenCode = `${token.slice(0, 9)}...`;

  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <div className="flex flex-grow justify-center items-center">
        <div className="">
          <span>{greetings}</span>
          <p>Token : {tokenCode}</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
