"use strict";
console.log("Hello World!");
// console.error();
// console.warn();

/////////////////
// Variaveis

let idade = 26;
console.log(idade);

// Tipos de variaveis
// não se usa mais 'var'
// não coloque numero no inicio da variável
// utilize camelCase
// não utilize palavras-chave reservadas apenas ao JS como log,splice, concat, etc...

idade = 30;
let numero = 30;
let altura = 1.77;
let nome = "nome";
let eValido = true;
let outra;
let nula = null;

const constante = 100;

console.log(
  idade,
  typeof idade,
  numero,
  typeof numero,
  altura,
  typeof altura,
  nome,
  typeof nome,
  eValido,
  typeof eValido,
  outra,
  typeof outra,
  nula,
  typeof nula
);

/////////////////
// Operadores aritmeticos

let numero1 = 20;
let numero2 = 2;

// Adição:            +
// Subtração:         -
// Multiplicação:     *
// Divisão:           /
// Exponenciação:     **
// Resto da Divisão:  %

const soma = numero1 + numero2;
console.log(`Soma = ${numero1 + numero2}`);
console.log(`Soma = ${soma}`);
console.log("Soma =", soma);
console.log("Subtração =", numero1 - numero2);
console.log("Multiplicação =", numero1 * numero2);
console.log("Divisão =", numero1 / numero2);
console.log("Exponenciação =", numero1 ** numero2);
console.log("Resto da Divisão =", numero1 % numero2);

// Precedencia de operadores

// Ratificação => Exponenciação => Multiplicação => Adição/Subtração
// Para dar prioridade a alguma opreção, englobe com ()

// Biblioteca Math
console.log(Math.PI); /*valor de PI*/
console.log(Math.sqrt(16)); /* calcula a √ */
