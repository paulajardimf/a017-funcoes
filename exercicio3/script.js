// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

function divisão(num1, num2) {
    return num1 / num2
}

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

const numPrompt1 = +prompt("Insira um número:");
const numPrompt2 = +prompt("Insira outro número;");

console.log(`Você inseriu os números ${numPrompt1} e ${numPrompt2}.`);
console.log(`A soma dos dois números é ${soma(numPrompt1, numPrompt2)}.`);
console.log(`A subtração do primeiro número pelo segundo número é ${subtracao(numPrompt1, numPrompt2)}`);
console.log(`A multiplicação do primeiro número pelo segundo número é ${multiplicacao(numPrompt1, numPrompt2)}`);
console.log(`A divisão do primeiro número pelo segundo número é ${divisão(numPrompt1, numPrompt2)}`);