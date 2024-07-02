import RecipeList from "@/components/recipe-list";

async function fetchRecipesList() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data?.recipes;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Recipes() {
  const recipeList = await fetchRecipesList();
  return (
    <>
      <RecipeList recipeList={recipeList} />
    </>
  );
}
