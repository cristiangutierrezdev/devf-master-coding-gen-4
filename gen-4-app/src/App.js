import './App.css';
import Button from './components/Button'

function App() {
  const userName = 'Pepito'

  return (
    <div className='App'>
      <h1>Hola mundo</h1>
      <div>
        <p>
          Mi nombre es Cristian
        </p>
      </div>

      <Button user={userName} edad='20'/>
    </div>
  );
}

export default App;
