import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const DisplayAnecdote = (props) => {
  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{props.current[0]}<br />
      has {props.current[1]} votes</p>
    </>
  )
}

const DisplayMostVotes = (props) => {
  const sortedCopy = [
    ...props.value
  ]
  return (
    <>
      <h2>Anecdote with most votes</h2>
      <p>{sortedCopy.sort((a,b) => { return b[1] - a[1] })[0][0]}<br />
      has {sortedCopy.sort((a,b) => { return b[1] - a[1] })[0][1]} votes</p>
    </>
  )
}

const App = () => {
  
  const [ anecdotes, setAnecdotes ] = useState([
    ['If it hurts, do it more often.', 0],
    ['Adding manpower to a late software project makes it later!', 0],
    ['The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 0],
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 0],
    ['Premature optimization is the root of all evil.', 0],
    ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 0],
    ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', 0],
    ['The only way to go fast, is to go well.', 0]
  ])

  const [ selected, setSelected ] = useState(0)

  const randomAnecdote = (max) => {
    return (
      Math.floor(Math.random() * max)
    )
  }

  const updateSelected = () => {
    return(
      setSelected(randomAnecdote(8))
    )
  }

  const updateVote = (props) => {
    const updatedAnecdotes = [
      ...anecdotes
    ]
    updatedAnecdotes[props][1] += 1
    setAnecdotes(updatedAnecdotes)
  }  

  return (
    <div>
      <DisplayAnecdote current={anecdotes[selected]} />
      <Button text="vote" handleClick={() => updateVote(selected)} />
      <Button text="next anecdote" handleClick={() => updateSelected()} />
      <DisplayMostVotes value={anecdotes} />
  </div>
  )
}

export default App