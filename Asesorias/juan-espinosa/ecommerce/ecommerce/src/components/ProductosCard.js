import React from 'react'
import "../styles/productosCard.scss"
 function Tarjetaprod(producto) {
   
    return (
        <div className="tarjetaprod" key={producto.id}>
            <img className="tarjetaprod__ilustracion" src={producto.ilustracion} alt={producto.altText}></img>
            <p className="tarjetaprod__descripcion">{producto.descripcion}</p>
            <p className="tarjetaprod__nombre">{producto.nombre}</p>
            <p className="tarjetaprod__meses"> Hasta {producto.meses} sin intereses</p>
            <p className="tarjetaprod__precio">{producto.precio}</p>
            <button className="tarjetaprod__button" onClick={producto.Carrito}> Agregar a carrito </button>
        </div>
    )
}

export default Tarjetaprod;