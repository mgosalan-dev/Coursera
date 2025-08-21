/*

os tipos primitivos em javascript são:
- string
- number
- boolean
- null
- undefined
- symbol (ES6)
- bigint (ES11)
- object (não é um tipo primitivo, mas é importante mencionar)
   - array
- function

no javascript, os tipos primitivos são dinâmicos, ou seja,
podemos atribuir qualquer tipo de valor a uma variável


diferente do navegador que para o usuario digitar algo no prompt
no node.js o prompt não existe, mas podemos usar um pacote externo
 que seria o prompt-sync
 e assim podemos simular o prompt do navegador
https://www.npmjs.com/package/prompt-sync

const prompt = require('prompt-sync')();
const n = prompt('Enter a value: ');
console.log(typeof n); // "string", "number", "boolean", etc.
*/

/*
porem o prompt-sync não converte o valor digitado
para o tipo correto, ou seja, se o usuario digitar 10
ele vai ser uma string, e não um number
então precisamos fazer a conversão manualmente
*/
const prompt = require('prompt-sync')();
// Função para converter o valor digitado
function autoType(value) {

  // se for um número inteiro ou decimal
  if (!isNaN(value) && value.trim() !== ''){
    return value.includes('.') ? parseFloat(value) : parseInt(value);
  }

  // se for um booleano
  if (value.toLowerCase() === 'true') {
    return true;
  }
  if (value.toLowerCase() === 'false') {
    return false;
  }

  // se for uma string
  return value;
}
const input = prompt('Digite algo: ');
const retorno = autoType(input);
console.log(`O valor digitado foi: ${retorno}`);
console.log(`O tipo do valor digitado é: ${typeof retorno}`);
