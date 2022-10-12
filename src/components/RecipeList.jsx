// компонент одної картки
import { Recipe } from './Recipe';

export const RecipeList = ({ recipes }) => (
  <ul>
    {recipes.map(recipe => (
      <li key={recipe.id}>
        <Recipe recipe={recipe} />
      </li>
    ))}
  </ul>
);

/*
 * Це компонент-список, який в себе приймає пропс recipes, в App якому ми
 * передаємо JSON, тут ми розбираємо цей JSON, створюємо li-шки в середині
 * яких будуть компоненти Recipe, в якого є пропс recipe і в який ми через
 * RecipeList в App передаємо JSON. В Recipe все йде через RecipeList і JSON
 * мепається і заповнює даними компонент Recipe.
 *
 * App <= RecipList <= Recipe*/
