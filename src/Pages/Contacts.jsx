import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Container, Text, TextSmall } from './Pages.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const { contactsArr, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Text>Phonebook</Text>
      <ContactForm />

      <Container>
        {isLoading && !error && <b>Loading...</b>}
        {error && <p>Oops, something went wrong</p>}
        {contactsArr.length > 0 && (
          <Container>
            <TextSmall>Contacts</TextSmall>
            <Filter />
          </Container>
        )}
        {contactsArr.length > 0 && <ContactsList />}
      </Container>
    </Container>
  );
};

export default Contacts;
