const Persons = ({ peopleToShow, deleteHandler }) => {
  return (
    <div>
      {peopleToShow.map(people =>
        <div key={people.id}>{people.name} {people.number} <button onClick={() => 
          deleteHandler(people.id)
        }>delete</button>
        <br /></div>
      )}
    </div>
  )
}

export default Persons