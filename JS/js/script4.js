var n1 = prompt("Digite o primeiro número:");
var n2 = prompt("Digite o segundo número:");
var soma = Number(n1) + Number(n2);
alert(`A soma de ${n1} e ${n2} é ${soma}`);

var salario = prompt("Digite o salário:");

currency = parseFloat(salario).toLocaleString('pt-PT', {
  style: 'currency',
  currency: 'EUR',})
alert(`O salário é ${currency}`);
