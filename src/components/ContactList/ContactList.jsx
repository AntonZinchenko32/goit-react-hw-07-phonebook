import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
