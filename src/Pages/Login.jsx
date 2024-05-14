import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      setUsername("");
      setPassword("");
      setIsLoggedIn(true);
      console.log("berhasil login");
      return navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login. Please try again!");
      setIsLoggedIn(false);
      setUsername("");
      setPassword("");
    }
  };

  //   // useEffect to navigate to home page after successful login
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       setIsLoggedIn(true);
  //     }
  //   }, [navigate, setIsLoggedIn]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <div className="flex h-screen">
        <div className="flex flex-grow justify-center items-center">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="p-1 bg-green-50 border border-black text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-1 bg-green-50 border border-black text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="flex justify-center flex-col">
              <div>
                {error && (
                  <p className="flex justify-center text-red-500 font-medium">
                    {error}
                  </p>
                )}
              </div>
              <div className="flex justify-center">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      <div className="wrapper md:w-[400px] md:h-[440px]">
        <div className="form-box login">
          <h2 className="text-center 12pro:text-2xl md:text-3xl">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="" className="font-semibold">
                Password
              </label>
            </div>
            <div className="flex justify-center flex-col">
              <div>
                {error && (
                  <p className="flex justify-center text-red-500 font-medium">
                    {error}
                  </p>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="12pro:text-lg md:text-xl login-btn"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
