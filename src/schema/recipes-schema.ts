import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const RecipesSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const DrinksAPIResponseSchema = z.array(
  z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
  })
);
