import { ProxyState } from "../AppState.js"
import { pokemonService } from "../Services/PokemonService.js"

function _draw(){
  console.log("drawing")
  let template = ''
  ProxyState.pokemon.forEach(p => template += p.Template)
  document.getElementById("app").innerHTML = template
}
export default class PokemonController{

  constructor(){
    this.getPokemon()
    ProxyState.on("pokemon", _draw)
    _draw()
  }
  async getPokemon(){
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      console.log(error, "in the controller")
    }
  }

  toggle(name){
    pokemonService.toggle(name)
  }
}