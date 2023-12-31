import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import newRequest from "../../../utils/newRequest";
import { useAuth } from "../../context/authContext";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      login(res.data);
      console.log(res.data)
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => {setError(null),setUsername(e.target.value)}}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => {setError(null),setPassword(e.target.value)}}
        />
        <button type="submit">Login</button>
        {
          error &&
          <p className="error">{error}</p>
        }
      </form>
    </div>
  );
}

export default Login;