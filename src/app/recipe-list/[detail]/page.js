import RecipeDetailItems from "@/components/recipe-detail";

async function fetchRecipeDetails(currentId) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${currentId}`);
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function RecipeDetails({ params }) {
  const recipeDetail = await fetchRecipeDetails(params?.detail);

  return <RecipeDetailItems recipeDetail={recipeDetail} />;
}
