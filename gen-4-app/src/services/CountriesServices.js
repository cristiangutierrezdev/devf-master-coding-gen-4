const base_url = 'https://restcountries.eu/rest/v2/all';

export const getCountries = () =>
  fetch(base_url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
