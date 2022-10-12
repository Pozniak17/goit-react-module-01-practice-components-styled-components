import { RecipeList } from './RecipeList';

// JSON
import recipes from '../json/recipes.json';

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
};
