const Header = (props) => {
  return (
      <>
          <h1>{props.course}</h1>
      </>
  )
}

const Content1 = (props) => {
  return (
    <>
      <p>{props.contentPart} {props.contentExercises}</p>
    </>
  )
}

const Content = (props) => {
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content contentPart1={part1} contentExercises1={exercises1} contentPart2={part2} contentExercises2={exercises2} contentPart3={part3} contentExercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
