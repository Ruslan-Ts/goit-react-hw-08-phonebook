import { Button, TableCell, TableLine } from './ContactListItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactListItem = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} deleted successfully`);
  };

  return visibleContacts.map(({ id, name, number }) => {
    return (
      <TableLine key={id}>
        <TableCell>{name}</TableCell>
        <TableCell>{number}</TableCell>
        <Button type="button" onClick={() => handleDelete(id, name)}>
          Delete
        </Button>
      </TableLine>
    );
  });
};

export default ContactListItem;
