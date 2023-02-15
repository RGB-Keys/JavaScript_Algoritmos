// Este arquivo foi criado com o propósito de guardar
//a array de objetos com os títulos e preços de cada livro.

// É claro que poderíamos fazer deixar isto em apenas um arquivo,
//mas desse jeito o código ficaria muito extenso, com muitas linhas
//e "sujo".

// Portanto, utilizando-se da O.O criamos um arquivo para armazenar
//variáveis importantes e que poderão ser utilizadas em vários casos.

const precosLivros = [{
    titulo: "JavaScript",
    preco: 25
},
{
    titulo: "PHP",
    preco: 15
},
{
    titulo: "Java",
    preco: 30
},
{
    titulo: "Elixir",
    preco: 50
},
{
    titulo: "GoLang",
    preco: 45
},
{
    titulo: "Phyton",
    preco: 20
}
];

module.exports = precosLivros;