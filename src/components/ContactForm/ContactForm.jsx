import { nanoid } from 'nanoid';
import { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { form, inputStyled, submitButton } = css;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const handleChange = evt => {
    if (evt.target.name === 'name') setName(evt.target.value);
    else setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    dispatch(addContact(name, number));

    setName('');
    setNumber('');

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
      <label htmlFor={numberInputId}>Number</label>
      <input
        id={numberInputId}
        onChange={handleChange}
        className={inputStyled}
        type="tel"
        name="number"
        value={number}
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
