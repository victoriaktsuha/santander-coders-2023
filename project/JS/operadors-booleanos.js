"use strict";
/////////////////
// Operadores booleanos

// Igualdade:           == (ou ===)
// Desigualdade:        != (ou !==)
// Maior que:           >
// Maior ou igual:      >=
// Menor que:           <
// Menor ou igual:      <=

/* '=' atribuição / '== ou ===' equiparação */
const number = 10;
console.log(number > 20); //false
console.log(number == 10); //true

console.log(number == "10"); //true - compara conteudo
console.log(number === "10"); //false - compara conteudo e tipo
/* boa prática utilizar '===' / '!==' */

// Conjunções lógicas

// AND => &&

let idade2 = 26;
let tenhoCNH = true;
const possoDirigir = idade2 >= 18 && tenhoCNH === true;
console.log("Posso dirigir ?", possoDirigir);

// OR => ||

let idade3 = 40;

const votoFacultativo = idade < 18 || idade >= 70;
console.log("Posso não votar ?", votoFacultativo);

// NOT => !

const estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso);
