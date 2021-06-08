import './App.css';
import Searcher from './components/searcher';
import { BrowserRouter} from "react-router-dom"
import CarouselAds from './components/Carousel';
import Departamentos from './components/departamentos';
import ProductosCarousel from './components/productosCarousel';


function App() {
  
  return (
    <BrowserRouter>
      <main className="App">
        <header className="header">
        <Searcher />
        </header>
        <section className="content">
          <h2 className="App__inicio">Inicio</h2>
          <div className="CarouselPos">
            <CarouselAds />
          </div>
          <div className="cardsDepartmentos">
            <Departamentos />
            <h3 className="App__inicio">lo más Hot</h3>
            <ProductosCarousel />
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
