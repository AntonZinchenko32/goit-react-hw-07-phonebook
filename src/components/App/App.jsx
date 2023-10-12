import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './App.module.css';

export const App = () => {
  const { container, headline } = css;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={container}>
      <h1 className={headline}>Phonebook</h1>
      <ContactForm />
      <h1 className={headline}>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};
