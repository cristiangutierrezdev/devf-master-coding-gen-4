import React, { useEffect, useState, useContext } from 'react';
import Card from '../components/Card';

// Services
import { getCountries, getCountriesAsync } from '../services/CountriesServices';

// context
import { CountriesContext } from '../context/CountriesContext';

function CountriesView() {
  const [algo, setAlgo] = useState(1);
  const { countries, setCountries } = useContext(CountriesContext)

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
    const newCountries = countries.map((pais, index) => {
      return (
        <Card
          titulo={pais.name}
          description={pais.capital}
          button_text='incrementar'
          button_text_less='Disminuir'
          progress={25}
          setAlgo={setAlgo}
          algo={algo}
          position={index}
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
