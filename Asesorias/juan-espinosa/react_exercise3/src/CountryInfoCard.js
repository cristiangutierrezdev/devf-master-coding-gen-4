import React from 'react'
import "./countryInfoCard.css"
function CountryInfoCard (props) {
    return (
        <main className="countryInfoStyles">
            <h1>{props.title}</h1>
            <div className="CountryInfoStyles_desc">
                <img style={{width: '50%', height: 'auto'}} className="CardStyle_img" src={props.img} alt = "no existing file"></img>
                <p className="CardStyle_text">{props.desc}</p>
            </div>
        </main>
    )

}

export default CountryInfoCard