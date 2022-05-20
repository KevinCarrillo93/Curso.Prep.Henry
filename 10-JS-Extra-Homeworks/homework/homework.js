// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var keys = Object.keys(objeto);
  var values = Object.values(objeto);
  var matriz = [];
  for (let i = 0; i < keys.length; i++) {
    let array = [];
    array.push(keys[i]);
    array.push(values[i]);
    matriz.push(array);
  }
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  // var x = 'aaabbcss';
  var obj = new Object();
  for (let i = 0; i < string.length; i++) {
    var counter = 0;
    for (let k = 0; k < string.length; k++) {
      if (string[i] == string[k]) {
        counter++;
      }
    }
    obj[string[i]] = counter;
  }
  return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = '';
  var min = '';
  for (let i = 0; i < s.length; i++) {
    if(s[i] == s[i].toUpperCase()){
      may += s[i];
    }else min += s[i];
  }
  return may+min;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(' ');
  var reverseString = '';
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    var word = '';
    word = array[i].split('').reverse().join('');
    reverseString += word + ' ';
  }
  return reverseString.trimEnd();
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var reverse = numero.toString().split('').reverse().join('');
  return numero == reverse ? 'Es capicua':'No es capicua';
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var thrash = '';
  var string = '';
  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] == 'a' || cadena[i] == 'b' || cadena[i] == 'c'){
      thrash += cadena[i];
    }else string += cadena[i];
  }
  return string;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a,b) => a.length - b.length);
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  // arreglo1 = [1,2,3];
  // arreglo2 = [2,4,5,6,1];
  var newArray = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let k = 0; k < arreglo2.length; k++) {
      if (arreglo1[i] == arreglo2[k]) {
        newArray.push(arreglo1[i]);
      }
    }
  }
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
