// Primeira aula de Algoritmos:

const livros = require('./00_ListaLivros');

let maisBarato = 0;

for(let atual = 0; atual < livros.length; atual++) {
    if(livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`);

// O código foi feito para ser uma estrutura de dados "bubble sort".

// É claro que ainda verei mais pela frente, mas aqui está um pequeno
//exemplo pensando em ordenar uma lista de livros através de seu preço.