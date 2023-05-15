import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContactList,
  StyledContactItem,
  StyledName,
  StyledNumber,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledContactList>
    {contacts.map(({ id, name, number }) => (
      <StyledContactItem key={id}>
        <StyledName>{name}</StyledName> <StyledNumber>{number}</StyledNumber>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </StyledContactItem>
    ))}
  </StyledContactList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
