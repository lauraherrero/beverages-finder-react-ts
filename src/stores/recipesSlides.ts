import { StateCreator } from "zustand";
import { getCategories } from "../services/RecipesService";
import { Categories } from "../types";

export type recipesSliceTypes = {
  categories: Categories
  fetchCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<recipesSliceTypes> = (set) => ({
  categories: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
});
