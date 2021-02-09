function isPalindrome(palabra) {
  const separatedWord = []
  let revertWord = ''

  for ( let i = 0; i < palabra.length; i++){
    separatedWord.push(palabra[i]); // Agregamos cada una de las letras al arreglo
  }

  for(let i = 0; i < palabra.length; i++){
    const letra = separatedWord.pop();
    revertWord = revertWord + letra // Concatenamos las letras
  }

  if(palabra === revertWord) {
    return 'Es Palindrome'
  } else {
    return 'No es Palindrome'
  }
}

console.log(isPalindrome('comer'))
