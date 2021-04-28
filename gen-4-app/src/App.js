import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar'

// Views
import CountriesView from './Views/CountriesView';
import ContadoresView from './Views/ContadoresView';
import ShowComponentView from './Views/ShowComponentView';

function App() {
  return (
    <BrowserRouter>
      <div className='App container-fluid d-flex flex-column p-0'>
        <Navbar/>
        <Switch>
          <Route path='/counters'>
            <ContadoresView />
          </Route>

          <Route path='/countries'>
            <CountriesView />
          </Route>

          <Route path='/show-component'>
            <ShowComponentView/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
