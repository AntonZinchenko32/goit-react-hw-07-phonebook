import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      {name}: {phone}
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
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
