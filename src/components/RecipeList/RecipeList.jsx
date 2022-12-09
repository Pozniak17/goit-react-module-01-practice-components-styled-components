import PropTypes from 'prop-types';

// компонент одної картки
import { Recipe } from '../Recipe/Recipe';
import { ListItem, List } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => (
  <List>
    {recipes.map(recipe => (
      <ListItem key={recipe.id}>
        <Recipe recipe={recipe} />
      </ListItem>
    ))}
  </List>
);

/*
 * Це компонент-список, який в себе приймає пропс recipes, в App якому ми
 * передаємо JSON, тут ми розбираємо цей JSON, створюємо li-шки в середині
 * яких будуть компоненти Recipe, в якого є пропс recipe і в який ми через
 * RecipeList в App передаємо JSON. В Recipe все йде через RecipeList і JSON
 * мепається і заповнює даними компонент Recipe.
 *
 * App <= RecipList <= Recipe*/

//* Описуємо наш JSON recipes як масив в якому об'єкт і значення id рядок.
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
