import { PokeApi } from "../PokeApi";

export async function getPokemon(offset) {
  try {
    return await PokeApi({
      method: "GET",
      url: `/pokemon?offset=${offset}&limit=20`,
    });
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetail(id) {
  try {
    return await PokeApi({
      method: "GET",
      url: `/pokemon/${id}/`,
    });
  } catch (error) {
    throw error;
  }
}
