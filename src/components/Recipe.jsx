import { FiClock } from 'react-icons/fi';
import { BiPieChart } from 'react-icons/bi';
import { HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({
  recipe: { name, time, servings, calories, image },
}) => (
  <div>
    <h2>{name}</h2>

    <div>
      <FiClock />
      <p>{time} min</p>
    </div>
    <div>
      <BiPieChart />
      <p>{servings} servings</p>
    </div>

    <div>
      <HiOutlineChartBar />
      <p>{calories} calories</p>
    </div>
    <img src={image} width="150px" alt="" />
  </div>
);
