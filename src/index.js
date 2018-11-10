const pokeList = document.querySelector("#pokemon-container")
const inputEl = document.querySelector("#pokemon-search-input")
let filter = ""

//render a pokemon
    const renderPokemon = pokemon => {
        pokeItem = document.createElement('div')
        pokeItem.className = "pokemon-container"
        pokeItem.innerHTML = `
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img 
            data-id=${pokemon.id} 
            data-action="flip" 
            class="toggle-sprite" 
            src=${pokemon.sprites.front}>
          </div>
        </div>
      </div>
        `

    pokeList.appendChild(pokeItem)
    }

//render multiple pokemons
    const renderPokemons = pokemons => 
        pokemons.forEach(pokemon => renderPokemon(pokemon))
    
//update pokemons list
    const updateList = (pokemons) => {

    pokeList.innerHTML = ""
    renderPokemons(pokemons)
    }
//listen for user input
    inputEl.addEventListener('keyup', () => {
        console.log(inputEl.value)
        filter = inputEl.value
        const filteredPokemons = POKEMON.filter(
            pokemon => pokemon.name.toLowerCase().includes(filter.toLowerCase()))
        updateList(filteredPokemons)           
    })

// filter pokemon based on user input


updateList(POKEMON)