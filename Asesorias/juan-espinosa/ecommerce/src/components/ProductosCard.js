import React from 'react'
import "../styles/tarjetadep.scss"

 function Tarjetaprod(props) {
    return (
        <div className="tarjetaprod">
            <img className="tarjetaprod__ilustracion" src={props.ilustracion} alt={props.altText}></img>
            <p className="tarjetaprod__descripcion">{props.descripcion}</p>
            <p className="tarjetaprod__nombre">{props.nombre}</p>
            <p className="tarjetaprod__precio">{props.precio}</p>
        </div>
    )
}

export default Tarjetaprod;