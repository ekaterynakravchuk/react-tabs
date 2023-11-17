import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleDown } from 'react-icons/fa';
const JobDuties = ({ duties }) => {
  const id = uuidv4;
  return (
    <ul className='duty-list'>
      {duties.map((duty) => {
        return (
          <li key={id} className='duty-item'>
            <FaAngleDoubleDown />
            <p>{duty}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default JobDuties;
