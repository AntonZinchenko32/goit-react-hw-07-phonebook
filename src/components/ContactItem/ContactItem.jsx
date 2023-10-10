import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button
        className={css.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
