import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Views
import NavbarView from './Views/NavbarView';
import CountriesView from './Views/CountriesView';
import ContadoresView from './Views/ContadoresView';
import ShowComponentView from './Views/ShowComponentView';
import HomeView from './Views/HomeView';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const componentePaises = (
    <NavbarView isdashboard={true}>
      <CountriesView />
    </NavbarView>
  );

  return (
    <BrowserRouter>
      <div className='App container-fluid d-flex flex-column p-0 '>
        <Switch>
          <Route exact path='/'>
            <NavbarView>
              <HomeView />
            </NavbarView>
          </Route>

          <Route path='/contadores'>
            <NavbarView>
              <ContadoresView />
            </NavbarView>
          </Route>

          <Route path='/paises'>{auth ? componentePaises : <Redirect to='/'/>}</Route>

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
