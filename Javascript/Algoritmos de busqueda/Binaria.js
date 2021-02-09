// const numbers = [3, 7, 11, 16, 20, 29, 40, 51, 78, 82, 93, 104, 133]

// function findNumber (numbersGroup, numberToFind) {
//   let minIndex = 0;
//   let numberMax = numbersGroup.length
//   let aux;

//   while ( minIndex <= numberMax) {
//     aux = Math.floor((minIndex + numberMax) / 2) // -- 6
//     if(numbersGroup[aux] === numberToFind){
//       return aux
//     } else if (numbersGroup[aux] < numberToFind) {
//       minIndex = aux + 1
//     } else {
//       numberMax = aux - 1
//     }
//   }

//   return -1
// }
// console.log(findNumber(numbers, 82))


const numbers = [3, 7, 11, 16, 20, 29, 40, 51, 78, 82, 93, 104, 133]

function encontrarNumero(grupoNumeros, numeroRefencia) { 
  let cantidadMaxima = grupoNumeros.length
  let primeraPosicion = 0; 

  while (primeraPosicion <= cantidadMaxima) {
    let mitad = Math.floor((cantidadMaxima + primeraPosicion) / 2) 

    if (grupoNumeros[mitad] === numeroRefencia){
      return mitad
    } else if (grupoNumeros[mitad] < numeroRefencia ) {
      primeraPosicion = mitad + 1
    } else {
      cantidadMaxima = mitad - 1
    }
  }
}

console.log(encontrarNumero(numbers, 40))