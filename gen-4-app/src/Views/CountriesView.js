import React, {useEffect, useState} from 'react'
import Card from '../components/Card'

function CountriesView() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = () => {
      fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    };

    getCountries();
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
  )
}

export default CountriesView
