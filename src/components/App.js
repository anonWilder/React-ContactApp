import React from 'react';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import './App.css';

function App() {

  const contacts = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@gmail.com"  
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@gmail.com"   
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
