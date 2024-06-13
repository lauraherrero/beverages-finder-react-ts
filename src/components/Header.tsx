import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { Recipes, SelectRecipe } from '../types';
import { ErrorMessage } from './ErrorMessage';
import { getSelectRecipe } from '../services/RecipesService';


export const Header = () => {

  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === '/', [pathname]);
  //console.log(isHome);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories.drinks);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  


  const [recipe, setRecipe] = useState<Recipes>({
    ingredient: '',
    category: ''
  });

  const [selectedRecipe, setSelectedRecipe] = useState<SelectRecipe>({
    idDrink: '',
    strDrink: '',
    strDrinkThumb: '',
    strCategory: '',
    strInstructions: '',
    strAlcoholic: '',
    strGlass: ''
  })

  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    })
    setSelectedRecipe({
      ...selectedRecipe
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(recipe).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');

    //Consultar las recetas:
    searchRecipes(recipe)
  }

  useEffect(() => { fetchCategories() }, [])

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo cocktail" />
          </div>
          <nav className='flex gap-4'>
            <NavLink className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'} to="/">Inicio</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'} to="/favoritos">Favoritos</NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
            onSubmit={handleSubmit}
          >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className='space-y-4'>
              <label htmlFor="ingredient" className='block, text-white uppercase font-extrabold text-lg'>Nombre o Ingredientes</label>
              <input
                type="text"
                name="ingredient"
                id="ingredient"
                className='p-3 w-full rounded-lg focus:outline-none'
                placeholder='Nombre o Ingrediente. Ej: Vodka, Tequila, Café...'
                onChange={handleChange}
                value={recipe.ingredient}
              />
            </div>
            <div className='space-y-4'>
              <label htmlFor="category" className='block, text-white uppercase font-extrabold text-lg'>Categoría</label>
              <select
                name="category"
                id="category"
                className='p-3 w-full rounded-lg focus:outline-none'
                onChange={handleChange}
                value={recipe.category}
              >
                <option value="">--Seleccione--</option>
                {categories.map(category => (
                  <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                ))}
              </select>
            </div>
            <input type="submit" value="Buscar recetas"
              className='cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-extrabold w-full p-2 rounded-lg uppercase'
            />
          </form>
        )}
      </div>
    </header>
  )
}
