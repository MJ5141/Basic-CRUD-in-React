import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

function App() { 
  const contacts = [
  {
    id: "1",
    name: "John",
    email: "john@suv.com"
  },
  {
    id: "2",
    name: "Danny",
    email: "danny@suv.com"
  }
]
  
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
