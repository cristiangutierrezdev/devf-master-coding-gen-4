import './App.css';
import Contador from './classComponents/Contador';
import ContadorFuncional from './functionalComponents/ContadorFuncional';

function App() {
  return (
    <div className='App'>
      <Contador titulo='Contador' />
      <ContadorFuncional titulo='Contador Funcional'/>
    </div>
  );
}

export default App;
