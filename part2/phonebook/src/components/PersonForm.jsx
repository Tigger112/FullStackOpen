const Input = ({ text, onUpdate, value }) => {
  return (
    <div>
      {text}
      <input value={value} onChange={(e) => onUpdate(e.target.value)} />
    </div>
  );
};

const PersonForm = ({
  persons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setPersons,
  personServices,
}) => {
  const personCheck = () => persons.every((person) => person.name !== newName);

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const message = `${newName} is already added to phonebook, replace the old number with a new one?`;

    if (personCheck()) {
      personServices.create(newPerson).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
    } else if (window.confirm(message)) {
      const person = persons.find((person) => person.name === newName);

      personServices.update(person.id, newPerson).then((response) => {
        setPersons(persons.toSpliced(persons.indexOf(person), 1, response));
      });
    }
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        <Input text={"Name:"} onUpdate={setNewName} value={newName} />
      </div>
      <div>
        <Input text={"Number:"} onUpdate={setNewNumber} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
