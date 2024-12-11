//5. Crie um programa que receba três números do usuário e imprima-os em ordem crescente.

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));


let numeros = [num1, num2, num3];


numeros.sort((a, b) => a - b);

console.log("Números em ordem crescente: " + numeros.join(", "));
