import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
          <Route path='/contadores'>
            <NavbarView>
              <ContadoresView />
            </NavbarView>
          </Route>

          <Route path='/paises'>
            <NavbarView isdashboard={true}>
              <CountriesView />
            </NavbarView>
          </Route>

          <Route path='/mostrar-componente'>
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
