import React from 'react'

export const GifGridItem = ({title, url}) => {
   
    return (
        <>
        <img className="card-img-top" src={ url } alt={ title }/>
        <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        </div>
        </>
    )
}
