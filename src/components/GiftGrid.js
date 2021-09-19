//import React,{useState, useEffect} from 'react'
//import { getGifs } from '../helpers/getGifs'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifts'
import { GiftGridItem } from './GiftGridItem'


export const GiftGrid = ({category}) => {

    const {data:images, loading}=useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {loading&&<p>Loading...</p>}
        
        <div className="card-grid">
                {
                    images.map(img=>
                       <GiftGridItem 
                       key={img.id}
                       {...img} />
                
                        )
                }
        </div>
        
        </>
    )
}
