const Persons = ({ peopleToShow }) => {
  return (
    <div>
      {peopleToShow.map(people =>
        <div key={people.id}>{people.name} {people.number}<br /></div>
      )}
    </div>
  )
}

export default Persons