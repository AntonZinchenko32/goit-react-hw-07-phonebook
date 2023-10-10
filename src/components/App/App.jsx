import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const { container, headline } = css;

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
