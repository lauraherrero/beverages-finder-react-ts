export const getCategories = async () => {
  const url = "www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  const resp = await fetch(url);
  console.log(resp);
  
  // const data = await resp.json();
  // console.log(data);
  
  
}