import React from "react";
import "./gig.scss";
import { FcRating } from "react-icons/fc";
import { Slider } from "infinite-react-carousel";
import {FiThumbsUp} from 'react-icons/fi'
import {FiThumbsDown} from 'react-icons/fi'
import {FiClock} from 'react-icons/fi'
import {FiRepeat} from 'react-icons/fi'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Fiver > GRAPHICS >DESIGN</span>
          <h1>i will create ai image</h1>
          <div className="user">
            <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>Ali</span>
            <div className="stars">
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowsScroll={1} className='slider'>
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, harum quas! Itaque architecto cum optio illum omnis
            beatae eos eum. Modi labore adipisci voluptate tempore maiores
            voluptas architecto recusandae exercitationem?
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="" alt="" />
              <div className="info">
                <span>Ali</span>
                <div className="stars">
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <span>5</span>
                </div>
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
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create a unique quality ai generated image based on a description that you give me</p>
          <div className="details">
            <div className="title">
              <div className="t-left">
                <FiClock/>
                <span>2 Days Delivery</span>
              </div>
              <div className="t-left">
                <FiRepeat/>
                <span>3 revisions</span>
              </div>
            </div>
            <div className="features">
              <div className="item">
                <HiArrowNarrowRight/>
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <HiArrowNarrowRight/>
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <HiArrowNarrowRight/>
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <HiArrowNarrowRight/>
                <span>Prompt writing</span>
              </div>
            </div>
            <div>

            </div>
          </div>
          <button>Continue</button>
          
        </div>
      </div>
    </div>
  );
};

export default Gig;
