//7. Crie uma função que receba uma string e retorne a string invertida.


function inverterString(str) {
    return str.split("").reverse().join("");
}

let texto = prompt("Digite uma string para invertê-la:");

let textoInvertido = inverterString(texto);
console.log("String invertida:", textoInvertido);
