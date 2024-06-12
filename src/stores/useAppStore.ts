import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipesSlice, recipesSliceTypes } from './recipesSlides';


export const useAppStore = create<recipesSliceTypes>()(devtools((...a) => ( {
  ...createRecipesSlice(...a)
})))