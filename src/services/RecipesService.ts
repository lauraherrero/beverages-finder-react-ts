import { CategoriesAPIResponseSchema } from "../schema/recipes-schema";

export const getCategories = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  const resp = await fetch(url);
  const data = await resp.json()

  const result = CategoriesAPIResponseSchema.safeParse(data);

  if(result.success) {
    return result.data;
  }
  
  
}