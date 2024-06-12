import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});


export const RecipesSchema = z.object({
  category: z.string(),
  ingredient: z.string()
})