const PersonForm = ({ submitHandler, changeName, changeNumber, newNumber, newName }) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          name: <input id="name-field" value={newName} onChange={changeName} /><br />
          number: <input value={newNumber} onChange={changeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>    </div>
  )
}

export default PersonForm