import PropTypes from 'prop-types';

import { Wrapper, Title, BadgeList, Badge } from './RecipeDifficulty.styled';

export const RecipeDifficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Title>Difficulty</Title>
      <BadgeList>
        <Badge active={difficulty === 'easy'}>Easy</Badge>
        <Badge active={difficulty === 'medium'}>Mediun</Badge>
        <Badge active={difficulty === 'hard'}>Hard</Badge>
      </BadgeList>
    </Wrapper>
  );
};

//* в середині компонента Badge нам треба виділити вибраний колір, виходячи з JSON, в середину Badge кидаємо prop active

RecipeDifficulty.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
};
