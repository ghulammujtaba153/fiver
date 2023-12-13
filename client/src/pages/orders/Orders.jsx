import React from 'react'
import './orders.scss'
import { FcContacts } from "react-icons/fc";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';
import { useAuth } from '../../context/authContext';

const Orders = () => {
    const { user : currentUser } = useAuth();
    //const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    const { isLoading, error, data } = useQuery({
        queryKey: ["orders"],
        queryFn: () =>
          newRequest.get(`/orders`).then((res) => {
            return res.data;
          }),
      });
      console.log(data)
      


  return (
    <div className='orders'>
        {isLoading? "loading" : error? "error!" :<div className="container">
            <div className="title">
                <h1>Orders</h1> 
            </div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    
                    <th>Contact</th>
                </tr>
                {Array.isArray(data) && data.map((order) => (
                    <tr key={order._id}>
                        <td>
                            <img className="image" src={order.img} alt="" />
                        </td>
                        <td>{order.title}</td>
                        <td>{order.price}</td>
                        <td><FcContacts className='icon'/></td>
                    </tr>
                ))}
                
                
            </table>
        </div>}

    </div>
  )
}

export default Orders