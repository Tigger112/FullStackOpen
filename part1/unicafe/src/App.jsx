import { useState } from 'react'

const Button = ({increase, text}) => <button onClick={increase}>{text}</button>
const StatisticLine  = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const Statistics = ({statistics}) => {
  if (statistics.total === 0) {
    return (
      <div>
      no feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
      <StatisticLine text={'good'} value={statistics.good} />
      <StatisticLine text={'neutral'} value={statistics.neutral} />
      <StatisticLine text={'bad'} value={statistics.bad}/>
      <StatisticLine text={'total'} value={statistics.total}/>
      <StatisticLine text={'average'} value={statistics.average}/>
      <StatisticLine text={'positive'} value={(statistics.positive + ' %')}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const getTotal = () => good + neutral + bad

  const getPositive = total => {
    let pbr = good / total * 100 
    return pbr ? pbr : 0
  }

  const getAverage = (total) => { 
    let avg = (good - bad) / (total)
    return avg ? avg : 0
  }

  const total = getTotal()
  const positive = getPositive(total)
  const average = getAverage(total)
  const statistics = {good, neutral, bad, total, average, positive}

  return (
    <div>
      <h1>Give us feedback</h1>
      <Button increase={() => setGood(good + 1)} text='add'/>
      <Button increase={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button increase={() => setBad(bad + 1)} text='bad'/>
      <h1>statistics</h1>
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App
