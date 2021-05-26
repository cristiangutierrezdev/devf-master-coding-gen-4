import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// Views
import NavbarView from './Views/NavbarView';
import CountriesView from './Views/CountriesView';
import ContadoresView from './Views/ContadoresView';
import ShowComponentView from './Views/ShowComponentView';
import HomeView from './Views/HomeView';
import CountryDataView from './Views/CountryDataView';

// Context
import { AuthContext } from './context/AuthContext';
import { CountriesProvider } from './context/CountriesContext';

function Routes() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Route exact path='/'>
        <NavbarView>
          <HomeView />
        </NavbarView>
      </Route>

      <CountriesProvider>
        <Route exact path='/paises/:id'>
          {token ? (
            <NavbarView isdashboard={true}>
              <CountryDataView />
            </NavbarView>
          ) : (
            <Redirect to='/' />
          )}
        </Route>
        <Route exact path='/paises'>
          {token ? (
            <NavbarView isdashboard={true}>
              <CountriesView />
            </NavbarView>
          ) : (
            <Redirect to='/' />
          )}
        </Route>
      </CountriesProvider>

      <Route path='/contadores'>
        <NavbarView>
          <ContadoresView />
        </NavbarView>
      </Route>

      <Route path='/mostrar-componente'>
        <NavbarView>
          <ShowComponentView />
        </NavbarView>
      </Route>
    </>
  );
}

export default Routes;
