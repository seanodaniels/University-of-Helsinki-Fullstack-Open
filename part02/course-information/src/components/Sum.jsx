const Sum = ({ parts }) => {
  const sumParts = parts.map(parts => parts.exercises).reduce((sum, num) => sum + num)

  return (
   <p>
    <strong>total of {sumParts} exercises</strong>
   </p>
  )
}

export default Sum