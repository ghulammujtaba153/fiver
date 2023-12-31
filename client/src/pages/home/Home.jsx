import React from 'react'
import './home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedby/TrustedBy'
import Slide from '../../components/slide/Slide'
import CatCard from '../../components/catcard/CatCard'
import { cards, projects } from '../../data'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  console.log(cards)
  return (
    <div className='home'>
        <Featured/>
        <TrustedBy/>
        <Slide slidesToShow={5} arrowsScroll={5}>
          {cards.map(card=>(
            
             <CatCard key={card.id} card={card}/>
           
          ))}
        </Slide>
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <AiOutlineCheckCircle/>
                The best for every budget
              </div>
                <p>
                  Find high-quality services at every price point. No hourly rates,
                  just project-based pricing.
                </p>

                <div className="title">
                <AiOutlineCheckCircle/>
                The best for every budget
              </div>
                <p>
                  Find high-quality services at every price point. No hourly rates,
                  just project-based pricing.
                </p>
                <div className="title">
                <AiOutlineCheckCircle/>
                The best for every budget
              </div>
                <p>
                  Find high-quality services at every price point. No hourly rates,
                  just project-based pricing.
                </p>

                <div className="title">
                <AiOutlineCheckCircle/>
                The best for every budget
              </div>
                <p>
                  Find high-quality services at every price point. No hourly rates,
                  just project-based pricing.
                </p>
              

              
            </div>
          </div>
        </div>

        <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map(card=>(
            
             <ProjectCard key={card.id} card={card}/>
           
          ))}
        </Slide>
    </div>
  )
}

export default Home