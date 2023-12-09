import React from "react";
import "./gig.scss";
import { FcRating } from "react-icons/fc";
import { Slider } from "infinite-react-carousel";
import {FiThumbsUp} from 'react-icons/fi'
import {FiThumbsDown} from 'react-icons/fi'
import {FiClock} from 'react-icons/fi'
import {FiRepeat} from 'react-icons/fi'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../../utils/newRequest";

const Gig = () => {
  const {id} =useParams()

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gig'],
    queryFn: () => newRequest.get(`/gigs/single/${id}`).then(
        (res) => {return res.data;}
        
      ),
  })
  console.log(data)

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });


  return (
    <div className="gig">
      {isLoading ? 'loading' : error? "something went wrong" :<div className="container">
        <div className="left">
          <span className="breadCrumbs">Fiver {">"} GRAPHICS {">"}DESIGN</span>
          <h1>{data.title}</h1>
          <div className="user">
            <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>Ali</span>
            {!isNaN(data.totalStars / data.starNumber) &&(
            <div className="stars">
              <FcRating />
              
              <span>
                    {Math.round(data.totalStars / data.starNumber)}</span>
            </div>
            )}
          </div>
          <Slider slideToShow={1} arrowsScroll={1} className='slider'>
            {data.images.map((img) => (
                <img
                key={img}
                src={img}
                alt=""
              />
            ))}
            
          
          </Slider>
          <h2>About This Gig</h2>
          <p>
            {data.desc}
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="" alt="" />
              <div className="info">
                <span>Ali</span>
                {!isNaN(data.totalStars / data.starNumber) &&(
                  <div className="stars">
                    <FcRating />
                    <span>
                          {Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                  )}
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>

                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>

                <div className="item">
                  <span className="title">languages</span>
                  <span className="desc">English</span>
                </div>

                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Aug 2022</span>
                </div>

                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo obcaecati veritatis aut quibusdam animi accusamus odio
                maxime ut laborum minus fuga earum, eum tempore rerum dolores
                maiores perspiciatis quae eaque.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span>asad</span>
                  <div className="country">
                    <img src="" alt="" />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium temporibus at fugit accusamus reiciendis explicabo
                nobis eveniet expedita, vero dolore aspernatur distinctio
                asperiores eos exercitationem. Incidunt, debitis. Facere,
                commodi dolor?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FiThumbsUp/>
                <span>Yes</span>
                <FiThumbsDown/>
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img src="" alt="" />
                <div className="info">
                  <span className="title">asad</span>
                  <div className="country">
                    <img src="" alt="" />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium temporibus at fugit accusamus reiciendis explicabo
                nobis eveniet expedita, vero dolore aspernatur distinctio
                asperiores eos exercitationem. Incidunt, debitis. Facere,
                commodi dolor?
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <FiThumbsUp/>
                <span>Yes</span>
                <FiThumbsDown/>
                <span>No</span>
              </div>
            </div>
            
          </div>
        </div>
        <div className="right">
          
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h2>$ {data.price}</h2>
          </div>
          <p>{data.shortDesc}</p>
          <div className="details">
            <div className="title">
              <div className="t-left">
                <FiClock/>
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="t-left">
                <FiRepeat/>
                <span>{data.revisionNumber} revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature)=>(
                <div className="item" key={feature}>
                  <HiArrowNarrowRight/>
                  <span>{feature}</span>
                </div>
              ))}
              
    
            </div>
            <div>

            </div>
          </div>
          <button>Continue</button>
          
        </div>
      </div>}
    </div>
  );
};

export default Gig;
