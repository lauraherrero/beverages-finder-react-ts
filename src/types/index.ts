import { z } from 'zod';
import { CategoriesAPIResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, RecipesSchema, SelecRecipeSchema } from '../schema/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type Recipes = z.infer<typeof RecipesSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>
export type Drink = z.infer<typeof DrinkAPIResponseSchema>
export type SelectRecipe = z.infer<typeof SelecRecipeSchema>
