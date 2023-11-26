import React from 'react'
import './messages.scss'
import { FcContacts } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Messages = () => {

    const currentUser={
        id:1,
        username:"ali",
        isSeller:true,
      }
    const message='lorem klkjlkjlkjlkjl kjljlj jklkjl '

  return (
    <div className='messages'>
        <div className="container">
            <div className="title">
                <h1>Messages</h1> 
            </div>
            <table>
                <tr>
                    <th>Buyer</th>
                    <th>Last Message</th>
                    <th>Date</th>
                    <th>Action</th>
                    
                </tr>
                <tr className='active'>
                    
                    <td>Gig</td>
                    <td><Link to='/messages/123' className="link">{message.substring(0, 100)}...</Link></td>
                    <td>Buyer1</td>
                    <td><button>Mark as Read</button></td>
                </tr>

                <tr>
                    
                    <td>Gig</td>
                    <td>32</td>
                    <td>Buyer</td>
                    <td><button>Mark as Read</button></td>
                </tr>
                <tr>
                    
                    <td>Gig</td>
                    <td>32</td>
                    <td>14</td>
                    <td><button>Mark as Read</button></td>
                </tr>
            </table>
        </div>

    </div>
  )
}

export default Messages