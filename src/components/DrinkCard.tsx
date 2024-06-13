import { Drink } from "../types"


type DrinkCardProps = {
  drink: Drink
}


export const DrinkCard = ({drink}: DrinkCardProps) => {
  return (
    <div>{drink.strDrink}</div>
  )
}
