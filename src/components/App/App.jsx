import React, { Component } from 'react';
import shortId from 'shortid';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';

class App extends Component { 
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContactItem = e => {
    this.setState(prevState => {
      if (this.state.contacts.some(el => el.name.toLowerCase() === e.name)) {
        alert(`${e.name} is already in contacts`)
      } else {
        const newContact = {
          name: e.name,
          number: e.number,
          id: shortId.generate(),
        }
        return { contacts: [...prevState.contacts, newContact] };

      }
    })
  };
  
  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeSearch = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizeSearch),
    );
  };
  deleteContact = contact => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(ta => ta.id !== contact),
      };
    });
  };

  filterInput = e => {
    const { name, value } = e.currentTarget;
    return this.setState({ [name]: value });
  };

  render () {
     return (
       <>
         <h1>Phonebook</h1>
         <Form onSubmit={this.addContactItem}/>
         <h2>Contacts</h2>
         <Filter onFilter={this.filterInput}/>
         <ContactList onFilter={this.filterContacts()} onDelete={this.deleteContact}/>
       </>
    );
  }
};
export default App;
