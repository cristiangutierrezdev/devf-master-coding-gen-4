import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import BootstrapEj from './components/bootstrap-ej/BootstrapEj'

function App() {
  const [picsum, setPicsum] = useState([]);

  const showInfo = () => {
    const cardPart = picsum.map((info) => {
      return(
        <Card author={info.author} img={info.download_url} width={info.width} height={info.height}/>
      );
    });

    return cardPart;
  }

  useEffect(() => {
    const getAPI = () => {
      // axios.get('https://picsum.photos/v2/list')
      //   .then((response) => response.json())
      //   .then((data) => setPicsum(data))
      //   .catch((err) => console.log(err));
      fetch('https://picsum.photos/v2/list')
        .then((response) => response.json())
        .then((data) => setPicsum(data))
        .catch((err) => console.log(err));
    };

    getAPI()
  }, [])

  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/images'>
            {showInfo()}
          </Route>
          <Route path='/bootstrap'>
            <BootstrapEj />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
