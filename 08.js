//8. Crie um programa que receba três números e determine qual é o maior.

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));

let maiorNumero = Math.max(num1, num2, num3);

console.log("O maior número é:", maiorNumero);
