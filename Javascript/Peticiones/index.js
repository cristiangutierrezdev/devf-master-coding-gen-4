const request = require('request');

const URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

// request(URL, callback_)

// function callback_(error, response, body) {
//   console.log(error)
//   console.log(response.statusCode)
//   const data = JSON.parse(body)
//   console.log(data.name)
// }

request(URL, (error, response, body) => {
  if(error) {
    console.log(error)
  } else {
    const parsedBody = JSON.parse(body)
    const formsUrl = parsedBody.forms[0].url

    request(formsUrl, (error, response, body) => {
      if(error) {
        console.log(error)
      } else {
        const data = JSON.parse(body)
        console.log(data.sprites.back_default)
      }
    })
  }
})
