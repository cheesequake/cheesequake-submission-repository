import { useState } from 'react'

const Button = ({text, val ,setFunc}) => {
  return (
    <button onClick={() => {
      setFunc(val+1)
    }}>
      {text}
    </button> 
  );
}
const StatisticLine = ({text, val, unit}) => {
  return(
      <tr>
        <td style={{width:"50px"}}>{text}</td>
        <td style={{width:"50px"}}>{val}{unit}</td>  
      </tr>
  );
}
const Statistics = ({good, bad, neutral}) => {
  return(
    <table>
        <tbody>
          <StatisticLine text="good" val={good} unit=""/>
          <StatisticLine text="neutral" val={neutral} unit=""/>
          <StatisticLine text="bad" val={bad} unit=""/>
          <StatisticLine text="all" val={good+bad+neutral} unit=""/>
          <StatisticLine text="average" val={(good-bad)/(good+bad+neutral)} unit=""/>
          <StatisticLine text="positive" val={(good*100)/(good+bad+neutral)} unit="%"/>
        </tbody>
    </table>
  );
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{display: 'flex'}}>
        <Button text = "good" val = {good} setFunc={setGood}/>
        <Button text = "neutral" val = {neutral} setFunc={setNeutral}/>
        <Button text = "bad" val = {bad} setFunc={setBad}/>
      </div>
      <h1>statistics</h1>
      {(good + bad + neutral) ? <Statistics good = {good} bad = {bad} neutral = {neutral}/> : "No feedback given"}
    </div>
  )
}

export default App