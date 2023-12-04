import React, { useEffect, useRef, useState } from 'react'
import './gigs.scss'
import {AiFillCaretDown} from 'react-icons/ai'
import GigCard from '../../components/gigCard/GigCard';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';
import { useLocation } from 'react-router-dom';

const Gigs = () => {
    const [open, setOpen]=useState(false);
    const [sort, setSort]=useState('Best Selling')
    const {search} = useLocation()
    const minRef = useRef();
    const maxRef = useRef();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['gigs'],
        queryFn: () => newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(
            (res) => {return res.data;}
            
          ),
      })
      console.log(data)

      const reSort = (type) => {
        setSort(type);
        setOpen(false);
      };
    
      useEffect(() => {
        refetch();
      }, [sort]);

      const apply=()=>{
        refetch()
      }

  return (
    <div className='gigs'>
        <div className="container">
            <span className='breadrums'>Fiver Graphics & Design </span>
            <h1>AI Artists</h1>
            <p>Explore the bounderies of art and technology with fiver's AI artists</p>

            <div className="menu">
                <div className="left">
                    <span>Budged</span>
                    <input ref={minRef} type="text" placeholder='min' />
                    <input ref={maxRef} type="text" placeholder='max' />
                    <button onClick={apply}>Apply</button>
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
                   isLoading ? "loading" : error ? "something went wrong" : data.map(gig=>(
                        <GigCard key={gig.id} item={gig}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Gigs