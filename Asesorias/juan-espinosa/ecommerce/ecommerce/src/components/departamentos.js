import React from 'react'
import Kabah from "../img/ad5.jpg"
import "../styles/departamentos.scss"
import Tarjetadep from './card'

function Departamentos() {
    const departamentos=[
        {
            ilustracion: "https://images.everyeye.it/img-notizie/unieuro-tv-hd-dvb-t2-offerta-esclusiva-170-euro-v4-494256-640x16.jpg",
            nombre:"Pantallas",
            id:2001
        },
        {
            nombre:"Celulares",
            ilustracion: "https://exitocol.vtexassets.com/arquivos/ids/4815456/celular-huawei-p-smart-2020-negro.jpg?v=637396166467970000",
            id:2002
        },
        {
            nombre:"Linea Blanca",
            ilustracion: "http://centtecn.com/wp-content/uploads/2017/01/linea-blanca-servicio.jpg",
            id:2003
        },
        {
            nombre:"Computadoras",
            ilustracion: "http://1.bp.blogspot.com/-cgyO8bPNE3U/VDcWyYvntyI/AAAAAAAAAC8/MglNOfBFL2A/s1600/computadoras%2Bde%2Bescritorio%2B1.jpg",
            id:2004
        },
        {
            nombre:"Videojuegos",
            ilustracion: "https://thumbs.dreamstime.com/b/black-wireless-game-controller-white-background-blue-lights-shot-to-162335156.jpg",
            id:2005
        }
    ]

    function mostrarDeps(){
        const nuevodep = departamentos.map(dep => {
            return <Tarjetadep ilustracion={dep.ilustracion} nombre={dep.nombre} key={dep.id}/>
        })

        return nuevodep
    }

    return (
        <div className="departamentos_contenedor">
            <section>
                <img className="departamentos__kabah" alt="Kabah FB live" src={Kabah}></img>
            </section>
            <section className="Departamentos_mostar">
                {mostrarDeps()}
            </section>
        </div>
    )
}

export default Departamentos;
