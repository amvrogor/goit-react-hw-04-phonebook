import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { List, Title } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <Title>Contacts</Title>
      {contacts.length !== 0 && (
        <List>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} />
          ))}
        </List>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
