import PropTypes from 'prop-types';
import { ContactItem, Name, Number } from './Contact.styled';

export const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <ContactItem>
      <Name> {name}:</Name>
      <Number> {number}</Number>
      <button onClick={() => onDelete(id)}>Delete</button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
