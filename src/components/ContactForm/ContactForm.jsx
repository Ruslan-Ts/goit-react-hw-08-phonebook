import { useState } from 'react';
import {} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import Notiflix from 'notiflix';
import { selectContactsList } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() ===
          e.target.elements.name.value.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`Name ${[name]} is already exist`);
      return;
    } else if (
      contacts.some(contact => contact.phone === e.target.elements.number.value)
    ) {
      Notiflix.Notify.failure(
        `Number ${e.target.elements.number.value} is already exist`
      );
      return;
    }
    dispatch(
      addContact({
        name: name,
        phone: phone,
      })
    );
    Notiflix.Notify.success('Contact added');
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
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
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          onChange={handleInputChange}
          value={phone}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
