import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";


class PokemonService {
  toggle(name) {
    let found = ProxyState.pokemon.find(p => p.name == name)
    found.checked = !found.checked
    console.log(found.checked)
  }
  async getPokemon() {
    try {
      const res = await pokeApi.get("pokemon/ditto")
      ProxyState.pokemon = [...ProxyState.pokemon, new Pokemon(res.data)]
      console.log(ProxyState.pokemon)
    } catch (error) {
      console.log(error, "error in the service")
    }
  }

  

}

export const pokemonService = new PokemonService();