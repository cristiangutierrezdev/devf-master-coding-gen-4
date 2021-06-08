import React from 'react'
import Walmart_logo from "../img/Walmart_vector.svg"
import arrow from "../img/arrow.svg"
import cart from "../img/shopping-cart.svg"
import Tucuenta from "../components/Tucuenta"
import { Link } from 'react-router-dom';
import "../styles/searcher.scss"
import TiendasVirtuales from "./TiendasVirtuales";
import { Route, Switch } from 'react-router';

function Searcher() {
    return (
            <main>
                    <div>
                        <ul className="searcher_nav">
                            <li><Link to="/"><img alt="logo" src={Walmart_logo}  className="searcher_nav__logo"></img></Link></li>
                            <li><input placeholder="Busca tus productos" className="searcher_nav__bar"></input></li>
                            <li><Tucuenta className="bg-transparent" /></li>
                            <li><img alt="cart" src={cart} className="searcher_nav__cart"></img></li>
                        </ul>
                    </div>
                    <section className="buyer_nav">
                        <div>
                            <ul className="buyer_nav__departamentos">
                                <li>Departamentos</li>
                                <li><img alt="arrow icon" src={arrow} className="buyer_nav__arrowDep"></img></li>
                                <li className="buyer_nav__item">Venta Geek</li>
                                <li className="buyer_nav__item"><Link to="/tiendasvirtuales">Tiendas Virtuales</Link></li>
                                <li className="buyer_nav__quincena"><Link to="/quincenaderenovacion">Quincena de Renovación</Link></li>
                            </ul> 
                            <Switch>
                                <Route path="/tiendasvirtuales" component={TiendasVirtuales}/>
                                <Route path="/quincenaderenovacion" component={TiendasVirtuales}/>   
                            </Switch>   
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
