import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ totalCount, setTotalCount ] = useState(0)
  const [ averageScore, setAverageScore ] = useState(0)
  const [ positiveScore, setPositiveScore ] = useState(0)
  
  const handleGood = () => {
    const updatedGood = (good+1)
    const updatedTotalCount = (totalCount + 1) 
    setTotalCount(updatedTotalCount)
    const updatedAverage = ((updatedGood-bad)/updatedTotalCount)
    setAverageScore(updatedAverage)
    const updatedPositiveScore = (updatedGood/updatedTotalCount*100)
    setPositiveScore(updatedPositiveScore)

    return (
      setGood(updatedGood)
    )
  }

  const handleNeutral = () => {
    const updatedTotalCount = (totalCount + 1) 
    setTotalCount(updatedTotalCount)
    const updatedAverage = ((good-bad)/updatedTotalCount)
    setAverageScore(updatedAverage)
    const updatedPositiveScore = (good/updatedTotalCount*100)
    setPositiveScore(updatedPositiveScore)
    
    return (
      setNeutral(neutral+1)
    )
  }

  const handleBad = () => {
    const updatedBad = (bad+1)
    const updatedTotalCount = (totalCount + 1) 
    setTotalCount(updatedTotalCount)
    const updatedAverage = ((good-updatedBad)/updatedTotalCount)
    setAverageScore(updatedAverage)
    const updatedPositiveScore = (good/updatedTotalCount*100)
    setPositiveScore(updatedPositiveScore)
    
    return (
      setBad(updatedBad)
    )
  }

  return (
    <>
      <h2>give feedback</h2>

      <Button handleClick={()=>handleGood()} text="good" />
      <Button handleClick={()=>handleNeutral()} text="neutral" />
      <Button handleClick={()=>handleBad()} text="bad" />

      <h2>statistics</h2>

      <p>
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}<br />
        all {totalCount}<br />
        average {averageScore}<br />
        positive {positiveScore} %
      </p>
    </>
  )
}

export default App