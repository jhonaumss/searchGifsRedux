import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { ShowGifs } from './ShowGifs';
import { Navbar } from './Navbar';

export const Home = () => {

    // const dispatch = useDispatch();

    // const state = useSelector(state => state);
    
    return (
        <>
        <Navbar/> 
        <div className="container">
        <ShowGifs/>
        </div>
        
        </>
    )
}
