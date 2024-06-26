import { PokemonsGrid } from "@/pokemons";
import { Metadata } from "next";


interface Props {
    params: { name: string };
  }

  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    
  
    return {
      title: `favoritos`,
      description: `Pokemon favoritos`,
    };
  }

  

export default function FavoritesPage() {
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
        <span className="text-5xl my-2">Listado de Pokémons</span>
        <PokemonsGrid pokemons={[]}/>
      
    </div>
  );
}

