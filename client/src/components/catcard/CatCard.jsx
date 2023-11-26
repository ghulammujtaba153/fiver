import React from 'react'
import './catcard.scss'
import {Link} from 'react-router-dom'

const CatCard = ({card}) => {
  return (
    <Link to='/gigs'>
      <div className='catcard'>
        <img src={card.img} alt='/'/>
        <span className='desc'>{card.desc}</span>
        <span className='title'>{card.title}</span>
      </div>
    </Link>
    
  )
}

export default CatCard