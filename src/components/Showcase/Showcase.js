import React from 'react'
import './Showcase.css'

function Showcase({ bgImg, navItems, header, content, btnText }) {
    return (
        <div className="Showcase" style={{backgroundImage: 'url(' + bgImg + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="container">
                <div className="main">
                    <div className="navbar">
                        <ul>
                            {navItems.map((item, index) => 
                               <li key={index}><a href={item.url}>{item.name}</a></li> 
                            )}
                        </ul>
                    </div>
                    <div className="header">
                        <h1>{header}</h1>
                    </div>
                    <div className="content">
                        <p>{content}</p>
                    </div>
                    <button className="btn">{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Showcase
