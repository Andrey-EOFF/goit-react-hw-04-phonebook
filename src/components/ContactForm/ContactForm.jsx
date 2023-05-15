import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form, Label, Button } from './ContactForm.styled';
class ContactForm extends Component {
  state = {
    // contacts: [],
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(newContact);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
    // this.setState({ contacts: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={this.numberInputId}>
          Number
          <input
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
