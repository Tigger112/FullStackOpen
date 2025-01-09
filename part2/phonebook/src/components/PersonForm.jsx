const Input = ({ text, onUpdate}) => {
  return (
    <div>
      {text} 
      <input onChange={(e) => onUpdate(e.target.value)} />
    </div>
  )
}

const PersonForm = ({ persons, newName, setNewName, newNumber, setNewNumber, setPersons}) => {
  const personCheck = () => persons.every((person) => person.name !== newName);

  const addPerson = (e) => {
    e.preventDefault();
    let id;
    persons.length < 1 ? (id = 0) : (id = persons.at(-1).id + 1);
    personCheck()
      ? setPersons(
          persons.concat({
            name: newName,
            number: newNumber,
            id: id,
          })
        )
      : alert(`${newName} is already added to phonebook`);
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        <Input text={"Name:"} onUpdate={setNewName} />
      </div>
      <div>
        <Input text={"Number:"} onUpdate={setNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm