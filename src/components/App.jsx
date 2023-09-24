
import {AddContac} from "./contactForm/ContactForm";
import{ContactList} from './contactList/ContactList'
import { Filter } from "./filter/Filter";
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const App = () => {
const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts") ?? [];
    console.log(savedContacts);
    if (savedContacts.length !== 0) {
      const parsedContacts = JSON.parse(savedContacts);
      console.log(parsedContacts);
      return(parsedContacts);
    } else if (savedContacts.length === 0) {
      return ([]);
    };
});
const [filters, setFilter] = useState('');

useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts])

const createContact = (values) => {
  const targetContact = contacts
    .map((cont) => cont.name.toLowerCase())
    .includes(values.name.toLowerCase());

    if (targetContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      values.id = nanoid();
      setContacts(prevState => [...prevState, values]);
    };  
};

const changeFilter = searchValue => {
  setFilter(searchValue.target.value);
}

const handleDelete = (contactId) => {
  setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
};

const actualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));

    
    
      // const actualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
    
      <AddContac create={createContact} />
      <div>
        <Filter onFilter={changeFilter} initValue={filters}/>
        <ContactList actual={actualContacts} onDelete={handleDelete}/>
      </div>
    </>
  )
    }
 ;

