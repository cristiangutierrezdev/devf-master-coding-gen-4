import React from 'react'
import Walmart_logo from "../img/Walmart_vector.svg"
import arrow from "../img/arrow.svg"
import "../styles/searcher.scss"

function Searcher() {
    return (
        <main>
            <div>
                <ul className="searcher_nav">
                    <li><img alt="logo" src={Walmart_logo}  className="searcher_nav__logo"></img></li>
                    <li><input className="searcher_nav__bar" placeholder="Busca tus productos"></input></li>
                    <li className="searcher_nav__user">Tu cuenta</li>
                    <li><img alt="arrow icon" src={arrow} className="searcher_nav__arrow"></img></li>
                </ul>
            </div>
            <section className="buyer_nav">
                <div>
                    <ul className="buyer_nav__departamentos">
                        <li>Departamentos</li>
                        <li><img alt="arrow icon" src={arrow} className="buyer_nav__arrowDep"></img></li>
                        <li className="buyer_nav__item">Venta Geek</li>
                        <li className="buyer_nav__item">Tiendas Virtuales</li>
                        <li className="buyer_nav__quincena">Quincena de Renovación</li>
                    </ul>
                </div>
                <div>
                    <ul className="buyer_nav__ventasporinternet">
                        <li className="buyer_nav__Mismodia">Mismo dia</li>
                        <li className="buyer_nav__Enlinea">Solo en línea</li>
                    </ul>
                </div>
                <div>
                    <ul className="buyer_nav__ayuda">
                        <li className="buyer_nav__Chat">Chat</li>
                        <li className="buyer_nav__Chat">Ayuda<img alt="arrow icon" src={arrow} className="buyer_nav__arrowAyuda"></img></li>
                    </ul>
                </div>    
            </section>
            
        </main>
    )
}

export default Searcher
