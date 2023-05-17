import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Title, SubTitle, Container } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('WORK USEFFECT');
  }, []);

  const addContact = newContact => {
    const { name, number } = newContact;

    const isNameAlreadyExist = contacts.some(contact => contact.name === name);

    if (isNameAlreadyExist) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const contactToAdd = {
      id: nanoid(),
      name,
      number,
    };

    const setContacts = prevState => ({
      contacts: [...prevState, contactToAdd],
    });
  };

  const deletContact = contactId => {
    setContacts(filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter({ filter: e.currentTarget.value });
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const componentDidMount = () => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  const componentDidUpdate = (prevProps, prevState) => {
    console.log('App componentDidUpdate');

    console.log(prevState);
    if (this.state.contacts !== prevState.contacts) {
    }

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  const visibleContacts = this.getVisibleContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <Filter value={filter} onChange={changeFilter} />

      <SubTitle>Contacts</SubTitle>
      <ContactList contacts={visibleContacts} onDeleteContact={deletContact} />
    </Container>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
