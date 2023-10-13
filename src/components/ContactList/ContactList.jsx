import { useSelector } from 'react-redux';
import { getContacts, getFilterQuery } from 'redux/selectors';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const getVisibleContacts = (contacts, filterQuery) => {
  if (filterQuery === '') return contacts;
  else {
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );

    return filtredContacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getFilterQuery);

  return (
    <ul className={css.contactsList}>
      {getVisibleContacts(contacts, filterQuery).map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
