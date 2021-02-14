import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { gifAction } from '../actions/gifAction';
import { ListGifs } from './ListGifs';
import { SearchGifs } from './SearchGifs'

export const ShowGifs = () => {

    const dispatch = useDispatch();
    const [nameCategory, setNameCategory] = useState("");

    const state = useSelector(state => state);

    return (
        <>
        <div className="container">
         <SearchGifs onSearchCategoryGif = {handleSearchGif}
          setNameCategory={setNameCategory}/>
        </div>
        <br/>
        <h2>{nameCategory}</h2>
        <ListGifs gifs = {state}/>
        </>
    )

    function searchGif(value){
        dispatch(gifAction(value));
    }
    
    function handleSearchGif(value){
        searchGif(value);
    }
}

