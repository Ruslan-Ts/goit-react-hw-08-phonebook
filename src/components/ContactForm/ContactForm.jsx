import { useState } from 'react';
import { Button, Input, StyledForm } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
import { selectContactsList } from 'redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`Name ${[name]} is already exist`);
      return;
    } else if (contacts.some(contact => contact.number === number)) {
      Notiflix.Notify.failure(`Number ${number} is already exist`);
      return;
    }
    dispatch(
      addContact({
        name,
        number,
      })
    )
      .unwrap()
      .than(() => {
        Notiflix.Notify.success('Contact added');
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong :(');
      });

    setName('');
    setNumber('');
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={handleInputChange}
          value={name}
        />
      </label>
      <label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          onChange={handleInputChange}
          value={number}
        />
      </label>

      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};

export default ContactForm;
