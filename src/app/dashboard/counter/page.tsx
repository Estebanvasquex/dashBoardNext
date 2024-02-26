
import { PokemonsGrid } from "@/app/pokemons";
import { CarCounter } from "@/app/shopping-cart";

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
