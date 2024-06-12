import { StateCreator } from "zustand";
import { recipesSliceTypes } from "../types";
import { getCategories } from "../services/RecipesService";

export const createRecipesSlice : StateCreator<recipesSliceTypes> = () => ({
  categories: [],
  fetchCategories: async () => {
    await getCategories();
  }
})