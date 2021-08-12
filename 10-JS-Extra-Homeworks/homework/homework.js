// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var mat = [];
  for(let obj in objeto){
    let claVal = [obj + '', objeto[obj]];
    mat.push(claVal);
  }
  return mat;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for(var i = 0; i < string.length; i++){
    var total = 0;
    for(var j = 0; j < string.length; j++){ 
      if(string[i] === string[j]){
        total = total + 1;
      }
    }
    obj[string[i]] = total;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let uppCase = '';
  let LowCase = '';
  for(let i = 0; i < s.length; i++){
    const lttr = s[i];
    if(lttr == lttr.toUpperCase()) {
      uppCase += lttr;
    }
  }
  for(let i = 0; i < s.length; i++){
    const lttr = s[i];
    if(lttr == lttr.toLowerCase()) {
      LowCase += lttr;
    }
  }
  return uppCase + LowCase;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const wrds = str.split(' ');
  let newTxt = '';
  wrds.forEach(element => {
    const splStr = element.split('').reverse().join('');
    newTxt += splStr + ' ';
  });
  return newTxt.trimEnd();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero == (''+numero).split('').reverse().join('')) {
    return "Es capicua"
  } else {
    return "No es capicua"
  };
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newTxt = '';
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] != 'a' && cadena[i] != 'b' && cadena[i] != 'c'){
      newTxt += cadena[i];
    }
  }
  return newTxt;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let newArr = arr;
  let mods = 0;
  do{
    for(let i = 0; i < newArr.length - 1; i++){
      mods = 0;
      if(newArr[i].length > newArr[i+1].length){
        const wrd = newArr[i];
        newArr[i] = newArr[i+1];
        newArr[i+1] = wrd;
        mods ++;
      }
    }
  } while (mods != 0);
  return newArr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArr = [];
  const longerArr = arreglo1.length > arreglo2.length ? arreglo1 : arreglo2;
  longerArr.forEach(x => {
    (longerArr === arreglo2 ? arreglo1 : arreglo2).forEach(y => {
      if(x === y){
        newArr.push(x);
      }
    });
  });
  return newArr;
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

