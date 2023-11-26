import React from 'react'
import './gigCard.scss'
import { Link } from 'react-router-dom'
import {FcRating} from 'react-icons/fc'
import {AiTwotoneHeart} from 'react-icons/ai'

const GigCard = ({item}) => {
  return (
    <Link to='/gigs/123' className='link'>
        <div className='GigCard'>
            <img src={item.img} alt="" />
            <div className='info'>
                <div className="user">
                    <img src={item.pp} alt="image" />
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="stars">
                    <FcRating className='icon'/>
                    <span>{item.star}</span>
                </div>
            </div>
            <hr />

            <div className='details'>
                <AiTwotoneHeart className='icon'/>
                <div className="price">
                    <span>Starting At</span>
                    <h2>${item.price}</h2>
                </div>
                
            </div>
        </div>  
    </Link>
  )
}

export default GigCard