import { StateCreator } from "zustand";
import { SelectRecipe } from "../types";

export type favouriteSlideTypes = {
  favourites: SelectRecipe[];
  handleClickFavourite: (recipe: SelectRecipe) => void;
};

export const createFavouritesSlice: StateCreator<favouriteSlideTypes> = (set, get) => ({
  favourites: [],
  handleClickFavourite: (recipe) => {
    if(get().favourites.some(favourite => favourite.idDrink === recipe.idDrink)){
      set((state) => ({
        favourites: state.favourites.filter(favourite => favourite.idDrink !== recipe.idDrink)
      }))
      
    } else {
      set((state) => ({
        favourites: [...state.favourites, recipe]
      }))
    }
  },
});
