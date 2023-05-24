"use strict";
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
