import PropTypes from 'prop-types';

import { FiClock } from 'react-icons/fi';
import { BiPieChart } from 'react-icons/bi';
import { HiOutlineChartBar } from 'react-icons/hi';
import { Wrapper, InfoBlock, InfoBlockWrapper } from './RecipeInfo.styled';

export const RecipeInfo = ({ time, servings, calories, image }) => {
  return (
    <Wrapper>
      <img src={image} width="200px" alt="" />

      <InfoBlockWrapper>
        <InfoBlock>
          <FiClock />
          <p>{time} min</p>
        </InfoBlock>
        <InfoBlock>
          <BiPieChart />
          <p>{servings} servings</p>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartBar />
          <p>{calories} calories</p>
        </InfoBlock>
      </InfoBlockWrapper>
    </Wrapper>
  );
};

RecipeInfo.propTypes = {
  recipe: PropTypes.shape({
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
