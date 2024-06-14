import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipes,
  getRecipesById,
} from "../services/RecipesService";
import { Categories, Drink, Drinks, Recipes, SelectRecipe } from "../types";

export type recipesSliceTypes = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: SelectRecipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (recipes: Recipes) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<recipesSliceTypes> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: [
    {
      idDrink: "",
      strDrink: "",
      strDrinkThumb: "",
    },
  ],
  selectedRecipe: {} as SelectRecipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipes: async (recipes) => {
    const drinks = await getRecipes(recipes);
    set(() => ({
      drinks,
    }));
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipesById(id);
    set({
      selectedRecipe,
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as SelectRecipe
    })
  },
});
