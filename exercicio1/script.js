// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function nome(seuNome) {
//     console.log(`Olá, ${seuNome}!`);
// }

// nome("Paula");

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada(numero) {
//   for (let i = 0; i < 10; i++) {
//     console.log(` ${numero} X ${+i + 1} = ${numero * (+i + 1)}`);
//   }
// }

// tabuada(7);

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__

const nome = (seuNome) => {
  console.log(`Olá, ${seuNome}!`);
};

nome("Paula");

const tabuada = (numero) => {
  for (let i = 1; i < 11; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
  }
};

tabuada(7);
