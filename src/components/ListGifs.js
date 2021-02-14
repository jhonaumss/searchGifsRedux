import React from 'react'
import { GifGridItem } from './GifGridItem'

export const ListGifs = ({gifs}) => {
    const {data} = gifs;
    return (
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            data.map(img => 
                <div className="col" key={img.id}>
                    <div className="card h-80" >
                            <GifGridItem
                            {...img}
                            />
                    </div>
                </div>
            )
        }
        </div>
    )
}
