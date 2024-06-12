import { z } from 'zod';
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipesSchema } from '../schema/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type Recipes = z.infer<typeof RecipesSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>
