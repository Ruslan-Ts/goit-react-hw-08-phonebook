import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import {} from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';

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
