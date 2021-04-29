import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Card from './components/Card';

// Views
import NavbarView from './Views/NavbarView';
import CountriesView from './Views/CountriesView';
import ContadoresView from './Views/ContadoresView';
import ShowComponentView from './Views/ShowComponentView';

function App() {
  return (
    <BrowserRouter>
      <div className='App container-fluid d-flex flex-column p-0 '>
        <Switch>
          <Route path='/counters'>
            <NavbarView>
              <ContadoresView />
            </NavbarView>
          </Route>

          <Route path='/countries'>
            <NavbarView isdashboard={true}>
              <CountriesView />
            </NavbarView>
          </Route>

          <Route path='/show-component'>
            <NavbarView>
              <ShowComponentView />
            </NavbarView>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
