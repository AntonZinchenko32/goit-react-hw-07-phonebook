import { useDispatch } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/operations';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    console.log('click');
    await dispatch(deleteContact(id));
    dispatch(fetchContacts());
  };

  return (
    <li className={css.contactItem}>
      {name}: {phone}
      <button className={css.deleteButton} onClick={() => handleDelete()}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
