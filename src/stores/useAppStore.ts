import { createFavouritesSlice, favouriteSlideTypes } from './favouriteSlide';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipesSlice, recipesSliceTypes } from './recipesSlides';


export const useAppStore = create<recipesSliceTypes & favouriteSlideTypes>()(devtools((...a) => ( {
  ...createRecipesSlice(...a),
  ...createFavouritesSlice(...a)
})))