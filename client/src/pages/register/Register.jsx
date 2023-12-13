import React, { useState } from "react";
//import upload from "../../../utils/upload";
import "./Register.scss";
import newRequest from "../../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";


function Register() {
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    phone: '',
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(user);
    setError(null)
  
    if (name === "img") {
      
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setUser({
          ...user,
          [name]: reader.result,
        });
      };
    } else if (name === "password") {
      setUser({
        ...user,
        password: value,
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };
  

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    try {
      await newRequest.post("/auth/register", user);
      const login={
        username: user.username,
        password: user.password
      }
      const res = await newRequest.post("/auth/login", login);
      login(res.data)
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      
      navigate("/")
    } catch (err) {
      console.log(err);
      setError(err.response.data)
    }
    setLoading(false)
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" name='img' onChange={handleChange} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
          <p className="error">{error}</p>
          <button type="submit">{loading? 'loading...' : 'Register'}</button>
          
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        
      </form>
      
    </div>
  );
}

export default Register;