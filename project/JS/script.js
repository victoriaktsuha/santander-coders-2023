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

console.clear();

/////////////////
// Estruturas Condicionais

const idade4 = 20;

if (idade4 >= 18) {
  console.log("Você é maior de idade !");
} else {
  console.log("Você é menos de idade !");
}

let media = 10;
if (media >= 7) {
  console.log("Aprovado(a)");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado(a)");
}

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
