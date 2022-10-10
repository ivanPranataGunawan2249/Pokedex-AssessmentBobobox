import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export const PokeApi = axios.create({
  baseURL: baseUrl,
});

// export default PokeApi;
