import React from 'react'
import './myGigs.scss'
import { Link } from 'react-router-dom'
import {RiDeleteBin5Fill  } from "react-icons/ri";

const MyGigs = () => {
  return (
    <div className='myGigs'>
        <div className="container">
            <div className="title">
                <h1>Gigs</h1>
                <Link to='/add' className='link'>
                <button>
                Add New Gig
                </button>
                </Link>
                
            </div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td>Gig</td>
                    <td>32</td>
                    <td>14</td>
                    <td><RiDeleteBin5Fill className='icon'/></td>
                </tr>

                <tr>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td>Gig</td>
                    <td>32</td>
                    <td>14</td>
                    <td><RiDeleteBin5Fill className='icon'/></td>
                </tr>
                <tr>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td>Gig</td>
                    <td>32</td>
                    <td>14</td>
                    <td><RiDeleteBin5Fill className='icon'/></td>
                </tr>
            </table>
        </div>

    </div>
  )
}

export default MyGigs