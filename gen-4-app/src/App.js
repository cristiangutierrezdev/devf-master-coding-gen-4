import './App.css';
import Button from './components/Button'
import Card from './components/Card'
import Contador from './components/Contador'

function App() {
  const userName = 'Pepito'

  return (
    <div className='App'>
      <h1>Hola mundo</h1>
      <div>
        <p>
          Mi nombre es {userName}
        </p>
      </div>

      <Button user={userName} edad='20'/>
      <Card titulo='Este es un titulo' desc='Esta es una descripcion'/>
      <Contador initialNumber={20}/>
    </div>
  );
}

export default App;
