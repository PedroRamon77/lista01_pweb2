// 6. Crie um programa que receba um número inteiro e mostre uma contagem regressiva até zero no console.

let numero = parseInt(prompt("Digite um número inteiro para iniciar a contagem regressiva:"));

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número inteiro válido e positivo.");
} else {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}
