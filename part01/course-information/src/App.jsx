const Header = (props) => {
  return (
      <>
          <h1>{props.course}</h1>
      </>
  )
}


const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part contentPart={props.contentPart1} 
      contentExercises={props.contentExercises1} />
      <Part contentPart={props.contentPart2} contentExercises={props.contentExercises2} />
      <Part contentPart={props.contentPart3} contentExercises={props.contentExercises3} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.contentPart} {props.contentExercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1+props.exercises2+props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  console.log(part1.name)

  return (
    <div>
      <Header course={course} />
      <Content contentPart1={part1.name} contentExercises1={part1.exercises} contentPart2={part2.name} contentExercises2={part2.exercises} contentPart3={part3.name} contentExercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App
