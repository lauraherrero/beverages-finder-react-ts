import { StateCreator } from "zustand";
import { getCategories, getRecipes, getRecipesById } from "../services/RecipesService";
import { Categories, Drink, Drinks, Recipes, SelectRecipe } from "../types";

export type recipesSliceTypes = {
  categories: Categories
  drinks: Drinks
  modal: boolean
  selectedRecipe: SelectRecipe
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
  modal: false,
  selectedRecipe: {} as SelectRecipe,
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
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipesById(id)
    set({
      selectedRecipe
    })
  }
});
