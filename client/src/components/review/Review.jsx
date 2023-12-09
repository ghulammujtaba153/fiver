import React from 'react'
import './review.scss'
import { FcRating } from "react-icons/fc";
import {FiThumbsUp} from 'react-icons/fi'
import {FiThumbsDown} from 'react-icons/fi'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';


const Review = ({review}) => {

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['review.userId'],
        queryFn: () => newRequest.get(`/users/${review.userId}`).then(
            (res) => {return res.data;}
            
          ),
      })
      console.log(error)
  return (
    
        <div className="review">
              {isLoading? "loading" : error? "error!":<div className="user">
                <img src={data.img} alt="/" />
                <div className="info">
                  <span>{data.username}</span>
                  <div className="country">
                    
                    <span>{data.country}</span>
                  </div>
                </div>
              </div>}
              <div className="stars">
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
                <span>{review.star}</span>
              </div>
              <p>
                {review.desc}
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FiThumbsUp/>
                <span>Yes</span>
                <FiThumbsDown/>
                <span>No</span>
              </div>
              <hr />
        </div>
            
  )
}

export default Review