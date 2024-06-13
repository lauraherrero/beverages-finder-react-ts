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

export const DrinkAPIResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksAPIResponseSchema = z.array(DrinkAPIResponseSchema);

export const SelecRecipeSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strCategory: z.string(),
  strInstructions: z.string(),
  strAlcoholic: z.string(),
  strGlass: z.string()
})

export const SelecRecipesSchema = z.array(SelecRecipeSchema);