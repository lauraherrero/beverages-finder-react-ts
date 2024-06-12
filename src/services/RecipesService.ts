import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema } from "../schema/recipes-schema";
import { Recipes } from "../types";

export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  const resp = await fetch(url);
  const data = await resp.json();
  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
};


export const getRecipes = async (recipe: Recipes) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${recipe.category}&i=${recipe.ingredient}`;
  const resp = await fetch(url);
  const data = await resp.json();
  const response = await data.drinks;

  const result = DrinksAPIResponseSchema.safeParse(response);
  console.log(result);
  
  if(result.success) {
    return result.data;
  } 
}