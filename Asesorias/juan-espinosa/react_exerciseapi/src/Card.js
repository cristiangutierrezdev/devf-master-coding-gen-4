import React from 'react'
import "./Card.css"

export default function Card(props) {
    return (
        <main className="container">
            <div className="imgAuthor">{props.name}</div>
            <img className="imgStyles" alt="not found" src={props.img}></img>
            <div key={props.key}></div>
        </main>
    )
}
