import {
  PokemonsGrid,
  PokemonstResponseData,
  SimplePokemon,
} from "@/app/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonstResponseData = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon, index) => {
    return {
      id: pokemon.url.split("/").at(-2)!, //Se le agraa el signo de adminaración para que TS no se queje debido a que saca error y dice que el id puede no existir
      name: pokemon.name,
    };
  });

  return pokemons;
};

export default async function PagePokemons() {
  const pokemons = await getPokemons(151);
  debugger;
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <h1>POKEMONS</h1>

      <div>
        <PokemonsGrid pokemons={pokemons} />
      </div>
    </div>
  );
}
