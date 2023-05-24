"use strict";
/////////////////
// Arrays (Parte I)

let arr = ["Nome", 26, 1.77, true];
console.log(arr);
console.log(arr[0]);
console.log(arr[1], arr[2], arr[3]);
console.log(arr.length); // 4

for (let i = 0; i < arr.lenght; i++) {
  console.log(arr[i]);
}

for (let el of arr) {
  /* 'of' percorre os elementos*/
  console.log(el);
}

for (let index in arr) {
  /* 'in' percorre os index*/
  console.log(index);
}

/////////////////
// Métodos de Arrays (Parte II)

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento: slice

console.log(arr1.slice(2)); /*começa da posição até o ultimo elemento */
console.log(arr1.slice(1, 3)); /*começo / fim */

// Adicionando elementos: push (adiciona no final)| unshift (adiciona no inicio)

console.log("Antes de adicionar com push:", arr2);
arr2.push(10, 20, 30);
console.log("Depois de adicionar com push:", arr2);

console.log("Antes de adicionar com unshift:", arr2);
arr2.unshift(0);
console.log("Depois de adicionar com unshift:", arr2);

// Removendo elementos: pop | shift

console.log("Antes de remover com pop:", arr2);
arr2.pop(); /* não recebe argumento, apenas remove o ultimo */
console.log("Depois de remover com pop:", arr2);

console.log("Antes de remover com shift:", arr2);
arr2.shift(); /* não recebe argumento, apenas remove o primeiro */
console.log("Depois de remover com shift:", arr2);

// Concatenando arrays: concat

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log(arr1.concat(arr2));

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1);
let index34 = arr1.indexOf(34); //3
console.log(index34);
// Se houve outro elemento '34', ele iá retornar o index do primeiro; Caso retorne '-1', é pq o elemento não existe

let arr3 = [1, 2, 3, 3, 5, 3];
console.log(
  arr3.indexOf(3)
); /* imprime o index do último elemento '3' que ele encontrar */

// Descobrindo a existência de um elemento: includes

console.log(arr1);
console.log(arr1.includes(10)); // false

// Invertendo arrays: reverse

console.log(arr1);
let arr1Invertido = arr1.reverse();
console.log(arr1Invertido);
