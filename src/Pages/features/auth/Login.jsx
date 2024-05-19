import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import Loading from "../../../Components/Loading";

const Login = () => {
  // const [username, setEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRef = useRef();
  const errRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // untuk login menggunakan email dari platzi
  useEffect(() => {
    setError;
  }, [email, password]);

  // // untuk login menggunakan username dari dummyjson
  // useEffect(() => {
  //   setError;
  // }, [username, password]);

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post("https://dummyjson.com/auth/login", {
  //       username: username,
  //       password: password,
  //       expiresInMins: 30, // optional, defaults to 60
  //     });

  //     const { token } = response.data;
  //     localStorage.setItem("token", token);
  //     setUsername("");
  //     setPassword("");
  //     setIsLoggedIn(true);
  //     console.log("berhasil login");
  //     return navigate("/");
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     setError("Error during login. Please try again!");
  //     setIsLoggedIn(false);
  //     setUsername("");
  //     setPassword("");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // email untuk login dari platzi
      const userData = await login({ email, password }).unwrap();
      // const data = await home({ email }).unwrap();
      // email untuk login dari dummyjson
      // const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      // dispatch(setCredentials({ ...data, email }));
      // dispatch(setCredentials({ ...userData, username }));
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      if (!error?.response) {
        setError("No Server Response");
        console.log(error.response);
        setEmail("");
        setPassword("");
      } else if (error.response?.status === 400) {
        setError("Missing Email and Password");
      } else if (error.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
      // errRef.current.focus();
    }
  };

  const content = isLoading ? (
    <div className="flex h-screen flex-col">
      <div className="flex flex-grow justify-center items-center">
        <Loading />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <div className="wrapper md:w-[400px] md:h-[440px]">
        <div className="form-box login">
          <h2 className="text-center 12pro:text-2xl md:text-3xl">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                // id="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              {/* <label htmlFor="email" className="font-semibold">
                Username
              </label> */}
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
              <div className="flex justify-center ">
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

  return content;
};

export default Login;
