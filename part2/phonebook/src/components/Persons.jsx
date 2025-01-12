const DelButton =  ({ onClick }) => <button onClick={onClick}>delete</button>

const Person = ({ name, number, onClick }) => {
  return (
    <div>
      {name} {number} <DelButton onClick={onClick} />
    </div>
  );
};



const Persons = ({ persons, setPersons, searchFilter, personServices, }) => {

  const delatePerson = ({ name, id }) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personServices.del(id);
      setPersons(persons.filter((e) => e.id !== id));
    }
  } 

  return (
    <div>
      {persons.length > 0
        ? persons
            .filter((person) =>
              person.name.toLowerCase().includes(searchFilter)
            )
            .map((person) => (
                <Person
                  key={person.id}
                  name={person.name}
                  number={person.number}
                  onClick={() => delatePerson(person)}
                />
            ))
        : " no numbers"}
    </div>
  );
};

export default Persons;
