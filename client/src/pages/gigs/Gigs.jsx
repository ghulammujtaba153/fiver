import React, { useState } from 'react'
import './gigs.scss'
import {AiFillCaretDown} from 'react-icons/ai'
import { gigs } from '../../data';
import GigCard from '../../components/gigCard/GigCard';

const Gigs = () => {
    const [open, setOpen]=useState(false);
    const [sort, setSort]=useState('Best Selling')

  return (
    <div className='gigs'>
        <div className="container">
            <span className='breadrums'>Fiver Graphics & Design </span>
            <h1>AI Artists</h1>
            <p>Explore the bounderies of art and technology with fiver's AI artists</p>

            <div className="menu">
                <div className="left">
                    <span>Budged</span>
                    <input type="text" placeholder='min' />
                    <input type="text" placeholder='max' />
                    <button>Apply</button>
                </div>

                <div className="right">
                    <span className='sortBy'>SortBy</span>
                    <span className='sortType'>{sort}</span>
                    <AiFillCaretDown className='icon' onClick={()=>setOpen(!open)}/>
                    {
                        open&&
                        <div className="rightmenu">
                        <span onClick={()=>{setSort('Newest'), setOpen(false)}}>Newest</span>
                        <span onClick={()=>{setSort('Best Seller'), setOpen(false)}}>Best Seller</span>
                    </div>
                    }
                    
                </div>

            </div>

            <div className="cards">
                {
                    gigs.map(gig=>(
                        <GigCard key={gig.id} item={gig}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Gigs