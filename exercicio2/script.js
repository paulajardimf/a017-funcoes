// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(1, 2));

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function maiorOuIgual(num1, num2) {
    if (num1 >= num2) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(1, 2)); 

// c) Uma função que receba um número e imprima se ele é par ou não

function parOuImpar(num) {
    if (num % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

console.log(parOuImpar(2));

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function tamanhoString(string) {
    const semEspaco = string.split(" ").join("")
    console.log(`A frase contém ${semEspaco.length} letras. ${string.toUpperCase()}`);
}

tamanhoString("Essa frase")