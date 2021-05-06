import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// Views
import NavbarView from './Views/NavbarView';
import CountriesView from './Views/CountriesView';
import ContadoresView from './Views/ContadoresView';
import ShowComponentView from './Views/ShowComponentView';
import HomeView from './Views/HomeView';

// Context
import { AuthContext } from './context/AuthContext';

function Routes() {
  const { token } = useContext(AuthContext);

  const componentePaises = (
    <NavbarView isdashboard={true}>
      <CountriesView />
    </NavbarView>
  );

  return (
    <>
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

      <Route path='/paises'>
        {token ? componentePaises : <Redirect to='/' />}
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
