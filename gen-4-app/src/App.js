import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// Context
import { AuthProvider } from './context/AuthContext';

// routes
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <div className='App container-fluid d-flex flex-column p-0 '>
        <Switch>
          <AuthProvider>
            <Routes/>
          </AuthProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
