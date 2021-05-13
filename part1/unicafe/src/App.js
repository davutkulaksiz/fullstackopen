import React, { useState } from 'react'

const Statistic = (props) => (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
)

const StatisticPositive = (props) => (
  <tr>
    <td>{props.type}</td>
    <td>{props.value} %</td>
  </tr>
 )

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {

  if(props.value === 0)
  {
    return (
      <div>No feedback given</div>
    )
  }

  return (
  <div>
    <table>
      <tbody>
        <Statistic text={props.text1} value={props.type1}/>
        <Statistic text={props.text2} value={props.type2}/>
        <Statistic text={props.text3} value={props.type3}/>
        <Statistic text={props.text4} value={props.type4}/>
        <Statistic text={props.text5} value={props.type5}/>
        <StatisticPositive type={props.text6} value={props.type6}/>
      </tbody>
    </table>
  </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);



  const setToGood = newValue => {
    setGood(newValue);
    setAll(all + 1);
    setAverage((good + 1 - bad) / (all+1));
    setPositive((good + 1) / (all + 1) * 100);
  }

  const setToNeutral = newValue => {
    setNeutral(newValue);
    setAll(all + 1);
    setAverage((good - bad) / (all+1));
    setPositive((good) / (all + 1) * 100);
  }

  const setToBad = newValue => {
    setBad(newValue);
    setAll(all + 1);
    setAverage((good - bad - 1) / (all+1));
    setPositive((good) / (all + 1) * 100);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics value={all} text1="good" type1={good} text2="neutral" type2={neutral}
      text3="bad" type3={bad} text4="all" type4={all} text5="average"
      type5={average} text6="positive" type6={positive}/>
    </div>
  )
}

export default App