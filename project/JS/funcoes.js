"use strict";

////////////////////
// Funções

/* Reaproveitamento */

// Definição da função
function saudacao() {
  console.log("Olá!");
}

saudacao();

console.clear();

// Como enviar parametros para as funções

function saudacao(nome, curso, ano = "2023") {
  console.log(`Olá, ${nome}! Bem-vindo ao curso de ${curso} de ${ano}`);
}

saudacao("Bob", "Javascript");

console.clear();

// Retorno da função

function soma(num1, num2) {
  return num1 + num2;
  /* Não é recomendado colocar o 'console.log()' dentro da função, pois na maioria das vzs, a ideia não é imprmir valores e sim retorná-los para utilizar depois, ela deve ser genérica */
}

let resultado = soma(10, 20);
console.log(resultado);

console.clear();
function maiorDoQue50(num) {
  if (num > 50) {
    return true;
  }

  return false;
}
