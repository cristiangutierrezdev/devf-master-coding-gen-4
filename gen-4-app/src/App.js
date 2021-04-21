import './App.css';
import React, { useState, useEffect } from 'react';
import Contador from './components/classComponents/Contador';
// import ContadorFuncional from './components/functionalComponents/ContadorFuncional';
import ContadorFuncional2 from './components/functionalComponents/ContadorFuncional2';
import Card from './components/functionalComponents/Card';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardApi from './components/traerApi/CardApi'


function App() {
  const [autor, setAutores] = useState([]);

  const mostrarAutores = () => {

    
     const newAutores = autor.map((autor) => { 
      return (
        <CardApi
          nombreAutor={autor.author}
          imagenAutor={autor.download_url}
          
        />
      );
    });

    return newAutores;
  };

  useEffect(() => {
    const getAutores = () => {
      fetch('https://picsum.photos/v2/list')
        .then((response) => response.json())
        .then((data) => setAutores(data))
        .catch((err) => console.log(err));
    };

    getAutores();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <h5>React</h5> */}
        <Switch>
          <Route path='/images'> {mostrarAutores()}</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
