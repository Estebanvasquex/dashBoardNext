
import { PokemonCard } from "@/pokemons";
import { CarCounter } from "@/shopping-cart";

export const metadata = {
  title: "Shopping Cart",
  description: "El mejor contador hecho en next",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span>Productos del framwork</span>
      <CarCounter/> 

    </div>
  );
}
