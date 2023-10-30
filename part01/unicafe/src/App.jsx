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

  const [ ratings, setRatings ] = useState({
    good: 0, neutral: 0, bad: 0, 
    totalCount: 0, averageScore: 0, 
    positiveScore: 0
  })
  
  const handleGood = (props) => {
    const updatedGood = props.good + 1
    const updatedTotalCount = props.totalCount + 1
    const updatedAverage = ((updatedGood - props.bad)/updatedTotalCount)
    const updatedPositiveScore = (updatedGood/updatedTotalCount*100)
    
    const newRatings = {
      ...ratings,
      good: updatedGood,
      totalCount: updatedTotalCount,
      averageScore: updatedAverage,
      positiveScore: updatedPositiveScore
    }
    setRatings(newRatings)
  }

  const handleNeutral = (props) => {
    const updatedTotalCount = props.totalCount + 1
    const updatedAverage = ((props.good - props.bad)/updatedTotalCount)
    const updatedPositiveScore = (props.good/updatedTotalCount*100)
    
    const newRatings = {
      ...ratings,
      totalCount: updatedTotalCount,
      averageScore: updatedAverage,
      positiveScore: updatedPositiveScore
    }
    setRatings(newRatings)
  }

  const handleBad = (props) => {
    const updatedBad = props.bad + 1
    const updatedTotalCount = props.totalCount + 1
    const updatedAverage = ((props.good - updatedBad)/updatedTotalCount)
    const updatedPositiveScore = (props.good/updatedTotalCount*100)
    
    const newRatings = {
      ...ratings,
      bad: updatedBad,
      totalCount: updatedTotalCount,
      averageScore: updatedAverage,
      positiveScore: updatedPositiveScore
    }
    setRatings(newRatings)
  }

  return (
    <>
      <h2>give feedback</h2>

      <Button handleClick={()=>handleGood(ratings)} text="good" />
      <Button handleClick={()=>handleNeutral(ratings)} text="neutral" />
      <Button handleClick={()=>handleBad(ratings)} text="bad" />

      <h2>statistics</h2>

      <p>
        good {ratings.good}<br />
        neutral {ratings.neutral}<br />
        bad {ratings.bad}<br />
        all {ratings.totalCount}<br />
        average {ratings.averageScore}<br />
        positive {ratings.positiveScore} %
      </p>
    </>
  )
}

export default App