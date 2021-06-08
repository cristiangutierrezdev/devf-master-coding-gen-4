import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tarjetaprod from "./ProductosCard";
import itemsprod from "./productos";

const mostrarProductos = () => {

  const nuevoProducto = itemsprod.map((item) =>{
    return (
      <Tarjetaprod ilustracion={item.ilustracion} altText={item.altText} descripcion={item.descripcion} nombre={item.nombre} meses={item.meses} precio={item.precio} key={item.id}/>
    )
  })
  return nuevoProducto;
}

const ProductosCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemsprod.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemsprod.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = itemsprod.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        {mostrarProductos()}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={itemsprod} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default ProductosCarousel;