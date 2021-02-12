const axios = require('axios');

const URL = 'https://pokeapi.co/api/v2/pokemon';

axios
  .get(URL)
  .then((body) => {
    const formsUrl = body.data.forms[0].url;
    return axios.get(formsUrl)
  })
  .then(function(data){
    console.log(data)
  })
  .catch((error) => {
    console.log(error);
  });


// function getPokemon(nombrePokemon) {
//   return axios.get(`${URL}/${nombrePokemon}`);
// }

// function getPokemonForm(formUrl) {
//   return axios.get(formUrl);
// }

// getPokemon('charmander')
//   .then((pokemon) => {
//     const url = pokemon.data.forms[0].url

//     return getPokemonForm(url)
//   })
//   .then((form) => {
//     console.log(form.data.sprites.front_default)
//   })
//   .catch((err) => {
//     console.log(err);
//   });
