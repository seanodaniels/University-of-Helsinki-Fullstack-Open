import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.ratings.totalCount === 0) {
    return (
      <p>
      No feedback given
      </p>
    )
  }
  return (
    <p>
      good {props.ratings.good}<br />
      neutral {props.ratings.neutral}<br />
      bad {props.ratings.bad}<br />
      all {props.ratings.totalCount}<br />
      average {props.ratings.averageScore}<br />
      positive {props.ratings.positiveScore} %
    </p>
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
      <Statistics ratings={ratings} />
    </>
  )
}

export default App