import React from 'react'

export const GiftGridItem = ({id, title, url}) => {
    return (
        
            <div key={id} className="card animate__animated animate__bounce animate">
                <img src={url} alt={title} />
                <h2>{title}</h2>
            </div>
    )
}
