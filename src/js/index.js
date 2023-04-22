/*
quando clicarmos no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem


para isso vamos precisar trabalhar com dois elementos: 1-listagem
e o 2-cartao do pokemon
 

 

 
*/

// preciso criar duas variaveis no js para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

// vamos precisar trabalhar com um evento de click feito pelo usuário na listagem de pokemons
listaSelecaoPokemons.forEach(pokemon => {
     pokemon.addEventListener('click', ()=> {
       
        //-remover a classe aberto só do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        // - ao clicar em um pokemon da listagem pegaremos o id do pokemon para saber qual cartao mostrar

       const idPokemonSelecionado= pokemon.attributes.id.value
       

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir =document.getElementById(idDoCartaoPokemonParaAbrir)
cartaoPokemonParaAbrir.classList.add('aberto')


// -remover a classe ativa que marca o pokemon selecionado
const pokemonAtivoNaListagem = document.querySelector('.ativo')
pokemonAtivoNaListagem.classList.remove('ativo')
    // -adicionar a classe ativo no item da lista selecionado
    const idPokemonSelecionadoNaListagem= document.getElementById(idPokemonSelecionado)
    idPokemonSelecionadoNaListagem.classList.add('ativo')

     })
})




