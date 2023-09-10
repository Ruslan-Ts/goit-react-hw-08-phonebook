import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import { Input, Label } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Enter name of contact"
        value={filter}
        onChange={onFilter}
      ></Input>
    </Label>
  );
};

export default Filter;
