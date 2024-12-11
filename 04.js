//4. Crie uma função que recebe uma string como parâmetro e retorna a quantidade de vogais (a, e, i, o, u) na string.

function contarVogais(str) {
    let contador = 0;
    let vogais = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}

let texto = prompt("Digite uma string para contar as vogais:");
let numeroDeVogais = contarVogais(texto);
console.log("Número de vogais na string:", numeroDeVogais);
