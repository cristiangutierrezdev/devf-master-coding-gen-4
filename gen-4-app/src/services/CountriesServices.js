const base_url = 'https://restcountries.eu/rest/v1/all';

export const getCountries = () =>
  fetch(base_url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

export const getCountriesAsync = async () => {
  try {
    const data = await fetch(base_url);
    const dataJson = data.json();

    return dataJson;
  } catch (error) {
    return error;
  }
};
