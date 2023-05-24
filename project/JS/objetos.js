"use strict";

////////////////////
// Objetos

/* Definido por chave-valor */

let arr = ["nome", 26, 1.77, true];

let obj = {
  nome: "nome",
  idade: 26,
};
console.log(obj); // { nome: 'nome', idade: 26 }
console.log(obj.nome); // nome
console.log(obj["idade"]); // 26

// Adicionar chave-valor no objeto

obj.altura = 1.77;
console.log(obj); //{ nome: 'nome', idade: 26, altura: 1.77 }

// Remover chave-valor no objeto

delete obj.altura;
console.log(obj); // { nome: 'nome', idade: 26 }

console.clear();

// Como percorrer os objetos

/* 'in' retornará as chaves */
for (let chave in obj) {
  console.log(chave);
}
