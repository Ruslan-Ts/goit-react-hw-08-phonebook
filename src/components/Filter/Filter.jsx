import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import {} from './Filter.styled';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        placeholder="Enter name of contact"
        value={filter}
        onChange={onFilter}
      ></input>
    </label>
  );
};

export default Filter;
