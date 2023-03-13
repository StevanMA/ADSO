/* Ejemplo 1
let miArray = ["Manzana", "Banana", "Mandarina", "Pera"];
console.log(miArray[0]);*/

/* Ejemplo 2
let miLista = {
  fruta1: "manzana",
  fruta2: "naranja",
  fruta3: "banana",
  fruta4: "pera",
};
console.log(miLista[0]);
*/

/* Ejemplo 3
let miArray = ["Manzana", "Banana", "Mandarina", "Pera"];

for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}
*/

/* Ejemplo 4
//Crear una lista con algunos elementos
let miLista = {
  fruta1: "manzana",
  fruta2: "banana",
  fruta3: "naranja",
  fruta4: "pera",
};

// Recorrer la lista utilizando un ciclo for-in
for (let key in miLista) {
  console.log(miLista[key]);
}
*/

/* Ejemplo 5
//Crear un Array con algunos elementos
let miArray = ["Manzana", "Banana", "Mandarina", "Pera"];

//Recorrer el Array utilizando el metodo forEach
miArray.forEach(function (elemento) {
  console.log(elemento);
});
*/

/* Ejemplo 6
//Crear un Array con algunos elementos
let miArray = ["Manzana", "Banana", "Mandarina", "Pera"];

//Recorrer el Array utilizando un ciclo While
let i = 0;

while (i < miArray.length) {
  console.log(miArray[i]);
  i++;
}
*/

/* Ejemplo 7
// Crear una lista con algunos elementos
let miLista = {
  fruta1: "manzana",
  fruta2: "banana",
  fruta3: "naranja",
  fruta4: "pera",
};

//Recorrer el Array utilizando un ciclo While
let keys = Object.keys(miLista);
let i = 0;

while (i < keys.length) {
  console.log(miLista[keys[1]]);
  i++;
}
*/

/*
let miArray = [1, 2, 3, 4, 5];
let i = 0;

do {
  console.log(miArray[i]);
  i++;
} while (i < miArray.length);
*/

// Crear una lista con algunos elementos
let miLista = {
  fruta1: "manzana",
  fruta2: "banana",
  fruta3: "naranja",
  fruta4: "pera",
};

// Recorrer la lista utilizando un ciclo do-while
let keys = Object.keys(miLista);
let i = 0;

do {
  console.log(miLista[keys[i]]);
} while (i < keys.length);

/*
let num = parseInt(prompt("Ingrese un número"));

      //Funcion para comprobar si un numero es primo
      function esPrimo(n) {
        if (n <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      }

      //Imprimir todos los numero primos menores o iguales al numero ingresado.

      for (let i = 2; i <= num; i++) {
        if (esPrimo(i)) {
        }
        document.write(
          "Los número primos menores o iguales a ",
          num,
          " son:",
          i
        );
      }
*/
