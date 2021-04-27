import './App.css';
import React, { useState, useEffect } from 'react';
import Contador from './components/classComponents/Contador';
// import ContadorFuncional from './components/functionalComponents/ContadorFuncional';
import ContadorFuncional2 from './components/functionalComponents/ContadorFuncional2';
import Card from './components/functionalComponents/Card';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  const mostrarPaises = () => {
    const newCountries = countries.map((pais) => {
      return (
        <Card
          titulo={pais.name}
          description={pais.capital}
          button_text='incrementar'
          button_text_less='Disminuir'
          progress={25}
        />
      );
    });

    return newCountries;
  };

  useEffect(() => {
    const getCountries = () => {
      fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    };

    getCountries();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <h5>React</h5> */}
        <Switch>
          <Route path='/class'>
            <Contador titulo='Contador Class' />
          </Route>

          <Route path='/functional'>
            <ContadorFuncional2
              titulo='Contador Funcional DOS'
              mostrarPaises={mostrarPaises}
            />
            {/* <ContadorFuncional titulo='Contador Funcional' /> */}
          </Route>

          <Route path='/countries'>{mostrarPaises()}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
