import { Wrapper, Title } from './Recipe.styled';

import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';

export const Recipe = ({
  recipe: { name, time, servings, calories, image, difficulty },
}) => (
  <Wrapper>
    <Title>{name}</Title>

    <RecipeInfo
      time={time}
      servings={servings}
      calories={calories}
      image={image}
    />

    <RecipeDifficulty difficulty={difficulty} />
  </Wrapper>
);
