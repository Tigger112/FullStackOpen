import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personServices from "./services/personsForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    personServices.getAll().then((response) =>
      setPersons(persons.concat(response))
    );
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        onChange={setSearchFilter} 
      />

      <h3>add a new number</h3>
      <PersonForm
        persons={persons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
        personServices={personServices}
        />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        searchFilter={searchFilter} 
        personServices={personServices}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
