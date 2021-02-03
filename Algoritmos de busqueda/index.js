// function buscarElemento(array, elementToFind) {

//   const arraySize = array.length

//   for (let index = 0; index < arraySize; index++) {
//     if(array[index] === elementToFind) {
//       return console.log(index)
//     }
//   }

//   return console.log(-1)
// }

// const arregloDeElementos = [12, 34, 565, 33, 23]

// buscarElemento(arregloDeElementos, 2)

function buscarElementoDentroElemento(array) {
  const arraySize = array.length;

  for (let index = 0; index < arraySize; index++) {
    if (array[index] > 99) {
      const stringNumber = `${array[index]}`;
      const stringNumberSize = stringNumber.length;
      const lastDigitNumber = parseInt(stringNumber[stringNumberSize - 1])

      return console.log(lastDigitNumber)
      
    }
  }

  return console.log(-1);
}

const arregloDeElementos = [12, 34, 563, 33, 23];

buscarElementoDentroElemento(arregloDeElementos);
