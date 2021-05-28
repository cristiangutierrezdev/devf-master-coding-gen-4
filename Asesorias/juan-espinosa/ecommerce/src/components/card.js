import React from 'react'
import "../styles/tarjetadep.scss"

 function Tarjetadep(props) {
    return (
        <div className="tarjetadep_container">
            <img className="tarjetadep_container__ilustracion" alt="departamento nombre" src={props.ilustracion}></img>
            <p>{props.nombre}</p>
        </div>
    )
}

export default Tarjetadep;