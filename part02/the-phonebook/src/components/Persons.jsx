const Persons = ({ peopleToShow, deleteHandler }) => {
  // <form onSubmit={() => deleteHandler(people.id)}><button>x</button></form>
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