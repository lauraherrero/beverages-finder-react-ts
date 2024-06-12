import { create } from 'zustand';
import { createRecipesSlice } from './recipesSlides';
import { recipesSliceTypes } from '../types';


export const useAppStore = create<recipesSliceTypes>((...a) => ( {
  ...createRecipesSlice(...a)
}))