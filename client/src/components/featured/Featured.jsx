import React, { useState } from 'react'
import './featured.scss'
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Featured() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault()
      navigate(`/gigs?search=${input}`);
    };
    return (
      <div className="featured">
        <div className="container">
          <div className="left">
            <h1>
              Find the perfect <span>freelance</span> services for your business
            </h1>
            <div className="search">
              <div className="searchInput">
              <FiSearch className='icon'/>
                <input
                  type="text"
                  placeholder='Try "building mobil app"'
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <button onClick={handleSubmit}>Search</button>
            </div>
            <div className="popular">
              <span>Popular:</span>
              <button>Web Design</button>
              <button>WordPress</button>
              <button>Logo Design</button>
              <button>AI Services</button>
            </div>
          </div>
          <div className="right">
          {/* <img src="/images/pro.png" alt="" /> */}
          </div>
        </div>
      </div>
    );
  }
  
  export default Featured;


