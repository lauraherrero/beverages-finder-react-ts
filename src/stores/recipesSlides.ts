import { StateCreator } from "zustand";
import { getCategories, getRecipes, getSelectRecipe } from "../services/RecipesService";
import { Categories, Drinks, Recipes, SelectRecipe } from "../types";

export type recipesSliceTypes = {
  categories: Categories
  drinks: Drinks
  fetchCategories: () => Promise<void>
  searchRecipes: (recipes: Recipes) => Promise<void>
  selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice: StateCreator<recipesSliceTypes> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: [{
    idDrink: '',
    strDrink: '',
    strDrinkThumb: ''
  }],
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipes: async (recipes) => {
    const drinks = await getRecipes(recipes)
    set(() => ({
      drinks
    }))
  },
  selectRecipe: async(id) => {
      console.log(id);
      
  },
});
