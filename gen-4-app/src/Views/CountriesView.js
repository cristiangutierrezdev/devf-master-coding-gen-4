import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

// Services
import { getCountries } from '../services/CountriesServices';

function CountriesView() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then((result) => setCountries(result))
      .catch((err) => console.log(err));
  }, []);

  const mostrarPaises = () => {
    const newCountries = countries.map((pais) => {
      return (
        <Card
          titulo={pais.name}
          description={pais.capital}
          button_text='incrementar'
          button_text_less='Disminuir'
          progress={25}
        />
      );
    });

    return newCountries;
  };

  return (
    <div className='countries-view d-flex flex-wrap justify-content-center'>
      {mostrarPaises()}
    </div>
  );
}

export default CountriesView;
