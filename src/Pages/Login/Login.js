import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { singUp } from "../../Redux/Auth/authSlice";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.isFetching);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(singUp({ email, password }));
  };
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="loginInput"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="loginInput"
        />
        <button
          className="loginButton"
          onClick={handleSubmit}
          disabled={loading}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
