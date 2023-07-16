import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TYPES } from "./redux/types";

function App() {
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  const { list } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({
      type: TYPES.LOGIN,
      payload: true,
    });
  };

  const handleLogout = () => {
    dispatch({
      type: TYPES.LOGOUT,
      payload: false,
    });
  };

  console.log(list);
  return (
    <>
      <h1>{isAuth ? "anda sudah login" : "anda belum login"} </h1>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default App;
