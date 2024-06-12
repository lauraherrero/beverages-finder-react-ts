export type Category = {}

export type recipesSliceTypes = {
  categories: Category[]
  fetchCategories: () => Promise<void>
}