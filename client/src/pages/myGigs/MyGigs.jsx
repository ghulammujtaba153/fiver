import React from 'react'
import './myGigs.scss'
import { Link } from 'react-router-dom'
import {RiDeleteBin5Fill  } from "react-icons/ri";
import { useMutation, useQuery } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';
import { useAuth } from '../../context/authContext';

const MyGigs = () => {
  const { user : currentUser } = useAuth();
    //const currentUser= JSON.parse(localStorage.getItem("currentUser"))
    
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['mygigs'],
        queryFn: () => newRequest.get(`/gigs/mygigs/${currentUser._id}`).then(
            (res) => {return res.data;}
          ),
      })
    
      const mutation = useMutation({
        mutationFn: (id) => {
          return newRequest.delete(`/gigs/${id}`);
        },
        onSuccess: () => {
          queryClient.invalidateQueries(["mygigs"]);
        },
      });
    
      const handleDelete = (id) => {
        mutation.mutate(id);
      };

  return (
    <div className='myGigs'>
        {isLoading? "loading": error? "error!" : <div className="container">
            <div className="title">
                <h1>Gigs</h1>
                {currentUser.isSeller && (
                <Link to="/add">
                    <button>Add New Gig</button>
                </Link>
                )}
                
            </div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
                {data?.map((gig) => (
                <tr key={gig._id}>
                    <td>
                    <img className="image" src={gig.cover} alt="" />
                    </td>
                    <td>{gig.title}</td>
                    <td>{gig.price}</td>
                    <td>{gig.sales}</td>
                    <td><RiDeleteBin5Fill className='icon' onClick={() => handleDelete(gig._id)}/></td>
                </tr>
                ))}
                
                
                
            </table>
        </div>}

    </div>
  )
}

export default MyGigs