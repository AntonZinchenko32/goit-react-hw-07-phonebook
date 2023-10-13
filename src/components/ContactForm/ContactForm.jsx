import { nanoid } from 'nanoid';
import { useState } from 'react';
// redux
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/operations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactsList = useSelector(selectContacts);

  const { form, inputStyled, submitButton } = css;

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const dispatch = useDispatch();

  const handleChange = evt => {
    if (evt.target.name === 'name') setName(evt.target.value);
    else setPhone(evt.target.value);
  };

  const handleCheck = async (contacts, contactData) => {
    const { name, phone } = contactData;
    const gotMatch = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (!gotMatch) {
      await dispatch(addContact({ name, phone }));
      dispatch(fetchContacts());

      setName('');
      setPhone('');
    } else {
      alert(`${name} already in list`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    handleCheck(contactsList, { name, phone });

    form.reset();
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        id={nameInputId}
        onChange={handleChange}
        className={inputStyled}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={phoneInputId}>Phone Number</label>
      <input
        id={phoneInputId}
        onChange={handleChange}
        className={inputStyled}
        type="tel"
        name="phone"
        value={phone}
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={submitButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
