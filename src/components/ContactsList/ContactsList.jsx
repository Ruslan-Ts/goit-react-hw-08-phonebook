import {} from './ContactsList.styled';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactsList = () => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <ContactListItem />
    </ul>
  );
};

export default ContactsList;
