import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

// Services
import { getCountries, getCountriesAsync } from '../services/CountriesServices';

function CountriesView() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   getCountries()
  //     .then((result) => setCountries(result))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCountriesAsync();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
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
