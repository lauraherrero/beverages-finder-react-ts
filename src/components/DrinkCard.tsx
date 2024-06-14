import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types"


type DrinkCardProps = {
  drink: Drink
}


export const DrinkCard = ({ drink }: DrinkCardProps) => {

  const selectRecipe = useAppStore((state) => state.selectRecipe);


  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} className="hover:scale-110 transition-transform hover:rotate-1" />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate">{drink.strDrink}</h2>
        <button className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold" onClick={() => selectRecipe(drink.idDrink)}>
          Ver Receta
        </button>
      </div>
    </div>
  )
}
