import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Views
import NavbarView from './Views/NavbarView';
import CountriesView from './Views/CountriesView';
import ContadoresView from './Views/ContadoresView';
import ShowComponentView from './Views/ShowComponentView';
import HomeView from './Views/HomeView';

function App() {
  const [auth, setAuth] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setAuth(token);
    }
  }, []);

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
            {auth ? (
              <NavbarView>
                <ContadoresView />
              </NavbarView>
            ) : (
              <Redirect to='/' />
            )}
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
