import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const { contactsArr, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />

      <div>
        {isLoading && !error && <b>Loading...</b>}
        {error && <p>Oops, something went wrong</p>}
        {contactsArr.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter />
          </div>
        )}
        {contactsArr.length > 0 && <ContactsList />}
      </div>
    </div>
  );
};

export default Contacts;
