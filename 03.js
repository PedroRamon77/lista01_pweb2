//3. Crie uma calculadora simples que pergunte ao usuário dois números e, em seguida, a operação que ele deseja realizar (soma, subtração, multiplicação ou divisão). O programa deve imprimir o resultado da operação.

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha uma operação: soma:1, subtração:2, multiplicação:3 ou divisão:4");

let resultado;

if (operacao === "soma") {
  resultado = num1 + num2;
} else if (operacao === "subtração") {
  resultado = num1 - num2;
} else if (operacao === "multiplicação") {
  resultado = num1 * num2;
} else if (operacao === "divisão") {
  resultado = num1 / num2;
}

console.log(`O resultado é: ${resultado}`);
