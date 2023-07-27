import {} from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { selectVisibleContacts } from 'redux/selectors';

const ContactListItem = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} deleted successfully`);
  };

  return visibleContacts.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        {name}: {phone}
        <button type="button" onClick={() => handleDelete(id, name)}>
          Delete
        </button>
      </li>
    );
  });
};

export default ContactListItem;
