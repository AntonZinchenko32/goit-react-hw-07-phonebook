import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import css from './App.module.css';

export const App = () => {
  const { container, headline } = css;
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={container}>
      <h1 className={headline}>Phonebook</h1>
      <ContactForm />
      <h1 className={headline}>Contacts</h1>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};
