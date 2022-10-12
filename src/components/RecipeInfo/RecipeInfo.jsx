import { FiClock } from 'react-icons/fi';
import { BiPieChart } from 'react-icons/bi';
import { HiOutlineChartBar } from 'react-icons/hi';
import { Wrapper, InfoBlock } from './RecipeInfo.styled';

export const RecipeInfo = ({ time, servings, calories, image }) => {
  return (
    <Wrapper>
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
      <img src={image} width="150px" alt="" />
    </Wrapper>
  );
};
