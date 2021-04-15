import './App.css';
import Contador from './classComponents/Contador';
import ContadorFuncional from './functionalComponents/ContadorFuncional';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h3>React Router</h3>
        <Switch>
          <Route path='/class'>
            <Contador titulo='Contador Class' />
          </Route>

          <Route path='/functional'>
            <ContadorFuncional titulo='Contador Funcional' />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
