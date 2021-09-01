// Criando o array filmes e verificando se está tudo certo
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
console.log(filmes[1] == 'clube da luta' ? `Tudo certo!` : `Algo está errado.`);

// Imprimindo o array filmes inicial.
console.log(filmes)

// Colocando todos os elementos do array filmes em MAIÚSCULAS
for(i = 0; i < filmes.length; i++) {
    filmes[i] = filmes[i].toUpperCase()
}
//  Imprimindo o array filmes em maiúsculas
console.log(filmes)

// Criando o array cartoons
let cartoons = ["toy story", "Procurando Nemo", "Kung-fu panda", "wally", "fortnite"]

// Imprimindo o array cartoons inicial.
console.log(cartoons)

// Removendo o último elemento do array cartoons (que é um jogo!)
cartoons.pop()

// Imprimindo o array cartoons final.
console.log(cartoons)

// Concatenando os dois arrays (Modo 1)
let filmesEcartoons = []
filmesEcartoons = [].concat(filmes,cartoons);
console.log(filmesEcartoons);

// Concatenando os dois arrays (Modo 2)
// function transfer