//2. Criar um array de números e escrever uma função que retorne a soma de todos os elementos do array.

function somaArray(arr) {
    return arr.reduce((somatorio, numero) => somatorio + numero, 0);
}

let quantidade = parseInt(prompt("Quantos números você deseja somar?"));

let numeros = [];

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
}

let soma = somaArray(numeros);

console.log(`A soma dos números inseridos é: ${soma}`);
