"use strict";
/////////////////
// Coerção (conversão) de Tipos

// Coerção Explicita (Manual)
const numero3 = 10;
console.log(numero3, typeof numero3);

const numeroParaString = String(numero3);
console.log(numeroParaString, typeof numeroParaString);

const stringParaNumero = Number(numeroParaString);
console.log(stringParaNumero, typeof stringParaNumero);

console.log(parseFloat("3454.54")); // 3454.54 number /* Utilizar Number() */
console.log(parseInt("3454.54")); // 3554 /* Utilizar Number() */

console.log(Boolean(55654)); //true
console.log(Boolean(0)); //false - apenas quando for zero

// Coerção Implicita (Automatica)
console.log(10 + 1); // 11
// JS tende a converter as adições em texto e concatenar
console.log(10 + "1"); // 101
// Masquand se trata de subtração, ele entende ser uma operação
console.log(10 - "1"); // 9
console.log(10 - "asddsa"); // NaN

console.log(2 + 3 + 4 + "5"); // 95 string
console.log("5" + 2 + 3 + 4); // 5234 string
console.log("10" - "4" - "3" - 2 + "5"); //15 string
