const livros = require('./00_ListaLivros');

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco > livros[maisCaro].preco) {
        maisCaro = atual;
    }
};

console.log(`O livro mais caro da lista se chama ${livros[maisCaro].titulo} e custa ${livros[maisCaro].preco} reais.`);

// Mesma coisa do código anterior, sua única diferença está no nome
//das variáveis e a mudança de sinal em sua lógica.