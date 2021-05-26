import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//context
import { CountriesContext } from '../context/CountriesContext';

function CountryDataView() {
  const params = useParams();
  const [currentCountry, setCurrentCountry] = useState({});
  const { countries, setCountries } = useContext(CountriesContext);

  useEffect(() => {
    setCurrentCountry(countries[params.id]);
  }, [currentCountry, countries, params]);

  return <div>
    <h1>{currentCountry.name}</h1>
    <h4>{currentCountry.nativeName}</h4>
    <h4>{currentCountry.region}</h4>
    <h4>{currentCountry.subregion}</h4>
  </div>;
}

export default CountryDataView;
