//1. Criar um programa em JavaScript que pergunta o nome e a idade do usuário e imprime uma mensagem de saudação com base na idade (maior ou menor de idade).

let nome = prompt("Qual o seu nome?");
let idade = parseInt(prompt("Qual a sua idade?"));

if (idade >= 18) {
  console.log("Olá, ${nome}! Você é maior de idade.");
} else {
  console.log("Olá, ${nome}! Você é menor de idade.");
}
