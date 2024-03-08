import Link from "next/link";
import { SimplePokemon } from "../interfaces/SimplePokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={100}
            height={100}
            alt={`Pokemon Image ${name}`}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            ></Link>
          </div>
        </div>
        <div className="border-b flex item-center">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-red-600 ">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-gray-800"></div>
          </Link>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};
