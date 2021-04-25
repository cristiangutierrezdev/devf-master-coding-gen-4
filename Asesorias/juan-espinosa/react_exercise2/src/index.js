//Crea dos componentes uno llamado Profile y otro llamado Navigation.
//El componente de Profile debe recibir como parametro el nombre del usuario (name) y una url de una imagen (url)
//este componente debe mostrar los datos de la siguiente manera (ver imagen 1 profile)
//El componente Navigation debe de igual manera recibir el nombre del usuario (name) y una url de una imagen (url) y debe llamar al componente Profile
//y pasarle sus respectivas propiedades y este (navigation) debe de llamarse en App para renderizar ambos componentes
//el componente navigation debe tener un boton(a tu gusto) con una funcion que le cambie el color de background al navigation

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

