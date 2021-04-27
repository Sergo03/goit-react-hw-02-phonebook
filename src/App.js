import React, { Component } from 'react';
import Form from './Form/Form'
import shortid from 'shortid';
import Filter from './Filter/Filter'
import Render from './Render/RenderContactList'

class App extends Component{
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: ''
  
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }
  
  submitForm = (data) => {
    const { contacts } = this.state;
    const id = shortid.generate();
    const isIncludeName = !!contacts.find(contact => contact.name === data.name)
      
    isIncludeName && alert(`${data.name} is already in contacts`)
    !isIncludeName && this.setState(prevState => (
      {
        contacts: [...prevState.contacts, { ...data, id }]
      }
    )
    )
  }
  
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }


  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.submitForm} />
         <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.changeFilter }/>
        <Render value={visibleContacts} onDeleteContact={this.deleteContact}/>
      </div>

    )
  }
}


export default App;
