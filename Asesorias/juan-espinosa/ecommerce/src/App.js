import './App.css';
import Searcher from './components/searcher';
import { BrowserRouter } from "react-router-dom"
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
          <div className="CarouselPos">
            <CarouselAds />
          </div>
          <div className="cardsDepartmentos">
            <Departamentos />
            <ProductosCarousel />
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
