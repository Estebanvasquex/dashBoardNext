import React from "react";
import { SimplePokemon } from "../interfaces/SimplePokemon";
import Image from "next/image";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center ">
      {pokemons.map((pokemon, index) => {
        return (
          <div key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
            <span>POKEMONS</span>
          </div>
        );
      })}
    </div>
  );
};
