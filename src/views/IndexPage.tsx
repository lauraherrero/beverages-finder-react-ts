import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard";

export const IndexPage = () => {

  const drinks = useAppStore((state) => state.drinks);


  const hasDrinks = useMemo(() => drinks.some(e => e.strDrink !== ''), [drinks]);
  //console.log(hasDrinks);


  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">

          {drinks.map((drink) =>
          (
            <DrinkCard key={drink.idDrink} drink={drink} />
          )
          )}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">No hay resultados, rellena el formulario para buscar recetas.</p>
      )}
    </>
  )
}
