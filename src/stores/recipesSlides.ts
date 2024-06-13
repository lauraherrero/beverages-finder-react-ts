import { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipesService";
import { Categories, Drinks, Recipes } from "../types";

export type recipesSliceTypes = {
  categories: Categories
  drinks: Drinks
  fetchCategories: () => Promise<void>
  searchRecipes: (recipes: Recipes) => Promise<void>
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
    console.log(drinks);
    
    set(() => ({
      drinks
    }))
    
  }
});
