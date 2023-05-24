"use strict";
/////////////////
// Laços Numéricos - For

// O problema
/* let nota1 = Number(input.require("Informe nota 1:"));
let nota2 = Number(input.require("Informe nota 2:"));
let nota3 = Number(input.require("Informe nota 3:"));

let media1 = (nota1 + nota2 + nota3) / 3; */

// Acumulador (+= / -=)
let acumulador = 0;
// acumulador = acumulador + 10;
acumulador += 10;
// acumulador = acumulador + 2;
acumulador -= 2; // 8

acumulador++; //9

console.log(acumulador); // 12

// Estrutura 'for'
for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 10; i <= 12; i++) {
  console.log(i);
}
for (let i = 12; i > 8; i--) {
  console.log(i);
}

// Resolvendo o problema anterior
let nota;
let soma1 = 0;
for (let i = 1; i <= 3; i++) {
  nota = Number(input.question(`Informe a nota ${i} do aluno:`));
  soma1 += nota;
}
console.log(`A média do aluno é ${soma1 / 3}`);
