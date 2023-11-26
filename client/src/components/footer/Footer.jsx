import React from 'react'
import './footer.scss'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>categories</h2>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
          </div>

          <div className="item">
            <h2>categories</h2>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
          </div>

          <div className="item">
            <h2>categories</h2>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
          </div>

          <div className="item">
            <h2>categories</h2>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
          </div>

          <div className="item">
            <h2>categories</h2>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
            <span>Graphics & Design</span>
          </div>

        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiver </h2>
            <span> @ Fiver International ltd. 2023</span>
          </div>
          <div className="right">
            <BsFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <AiFillTwitterCircle className='icon'/>
            <AiFillLinkedin className='icon'/>

          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Footer