const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);
const Persons = ({ persons, searchFilter}) => {
  return (
    <div>
      {
        persons.length > 0
          ? persons
              .filter((person) => person.name.toLowerCase().includes(searchFilter))
              .map((person) => (
                <Person key={person.id} name={person.name} number={person.number} />
              ))
          : " no numbers"
      }
    </div>
  )
}

export default Persons