"use strict";
/////////////////
// Estruturas de Repetição | Laços Condicionais
const input = require("readline-sync");

const numeroSorteado = 5;

let numero4 = Number(input.question("Escolha um numero:"));

while (numero4 !== numeroSorteado) {
  console.log("Voce errou. Tente novamente");
  numero4 = Number(input.question("Escolha um numero:"));
}
console.log("Voce acertou");

// console.log(numero4, typeof numero4);
