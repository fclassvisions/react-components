import React from 'react'
import './Card.css'

function Card({ src, alt, title, content, width = '300px', height = '400px' }) {
    return (
        <div className="Card" style={{ width: width, height, height }}>
            <div className="header">
                <img src={src} alt={alt} style={{ width: width, height: 'calc(0.5 * ' + height + ')'}}/>
            </div>
            <div className="body"  style={{ width: width, height: 'calc(0.5 * ' + height + ')'}}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Card
