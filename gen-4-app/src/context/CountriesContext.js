import React, { createContext, useState } from 'react';

export const CountriesContext = createContext();

export const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);

  const shareData = {
    countries,
    setCountries,
  };

  return (
    <CountriesContext.Provider value={shareData}>
      {props.children}
    </CountriesContext.Provider>
  );
};
