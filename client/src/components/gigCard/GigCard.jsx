import React from 'react'
import './gigCard.scss'
import { Link } from 'react-router-dom'
import {FcRating} from 'react-icons/fc'
import {AiTwotoneHeart} from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../../utils/newRequest'

const GigCard = ({item}) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [item.userId],
        queryFn: () => newRequest.get(`/user/${item.userId}`).then(
            (res) => {return res.data;}
            
          ),
      })
  return (
    <Link to='/gigs/123' className='link'>
        <div className='GigCard'>
            <img src={item.cover} alt="" />
            <div className='info'>
                {isLoading ? "loading" :
                error ? "Something went wrong!" :

                <div className="user">
                    <img src={data.img} alt="/" />
                    <span>{data.username}</span>
                </div>}
                <p>{item.desc}</p>
                <div className="stars">
                    <FcRating className='icon'/>
                    <span>
                    {!isNaN(item.totalStars / item.starNumber) &&
                        Math.round(item.totalStars / item.starNumber)}
                    </span>
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