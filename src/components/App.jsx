import { ThemeProvider } from 'styled-components';
import { RecipeList } from './RecipeList/RecipeList';
import theme from './utils/theme';

// JSON
import recipes from '../json/recipes.json';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecipeList recipes={recipes} />
      </ThemeProvider>
    </>
  );
};
