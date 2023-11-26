import React from 'react'
import './featured.scss'
import { FiSearch } from 'react-icons/fi';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className='search'>
                    <div className="searchInput">
                        <FiSearch className='icon'/>
                        <input type="text" placeholder='Try "building mobile app"'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Logo Design</button>
                    <button>Wordpress</button>
                </div>
            </div>
            <div className="right">
                <img src="/images/pro.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured