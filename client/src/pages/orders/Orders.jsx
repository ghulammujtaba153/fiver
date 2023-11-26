import React from 'react'
import './orders.scss'
import { FcContacts } from "react-icons/fc";

const Orders = () => {

    const currentUser={
        id:1,
        username:"ali",
        isSeller:true,
      }

  return (
    <div className='orders'>
        <div className="container">
            <div className="title">
                <h1>Orders</h1> 
            </div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td>Gig</td>
                    <td>32</td>
                    <td>Buyer1</td>
                    <td><FcContacts className='icon'/></td>
                </tr>

                <tr>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td>Gig</td>
                    <td>32</td>
                    <td>Buyer</td>
                    <td><FcContacts className='icon'/></td>
                </tr>
                <tr>
                    <td>
                        <img src="" alt="" />
                    </td>
                    <td>Gig</td>
                    <td>32</td>
                    <td>14</td>
                    <td><FcContacts className='icon'/></td>
                </tr>
            </table>
        </div>

    </div>
  )
}

export default Orders