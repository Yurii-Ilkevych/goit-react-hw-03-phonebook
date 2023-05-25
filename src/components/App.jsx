import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Wrapper, PrimaryTittle, SecondTittle } from './App.styled';
export class App extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if(!contacts){
      return
    }
    this.setState({
      contacts: JSON.parse(contacts),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts === prevState.contacts) {
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleSubmit = data => {
    for (const contact of this.state.contacts) {
      if (contact.name.includes(data.name)) {
        alert(`${data.name} "is already in contacts"`);
        return;
      }
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleSearch = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  getContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filterContact;
  };

  render() {
    const { filter } = this.state;
    const contactsForRender = this.getContact();

    return (
      <Wrapper>
        <PrimaryTittle>Phonebook</PrimaryTittle>
        <ContactForm onForm={this.handleSubmit} />

        <SecondTittle>Contacts</SecondTittle>
        <Filter onSearch={this.handleSearch} searchName={filter} />
        <ContactList contacts={contactsForRender} onDell={this.deleteContact} />
      </Wrapper>
    );
  }
}


App.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
