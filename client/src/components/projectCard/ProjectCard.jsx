import React from 'react'
import './projectcard.scss'
import {Link} from 'react-router-dom'

const ProjectCard = ({card}) => {
  return (
    <Link to='/gigs' className='link'>
      <div className='projcard'>
        <img src={card.img} alt='/'/>
        <div className="info">
          <img src={card.pp} alt='/'/>
          <div className="text">
            <h2>{card.cat}</h2>
            <span>{card.username}</span>
          </div>
        </div>
      </div>
    </Link>
    
  )
}

export default ProjectCard