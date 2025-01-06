import { useState } from 'react'

const Button = ({increase, text}) => <button onClick={increase}>{text}</button>
const Statetistics = ({statetistics}) => {
    return (
      <div>
        <ul>
          <li>
            good {statetistics.good}
          </li>
          <li>
            neutral {statetistics.neutral}
          </li>
          <li>
            bad {statetistics.bad}
          </li>
          <li>
            total {statetistics.total}
          </li>
          <li>
            average {statetistics.average}
          </li>
          <li>
            positive {statetistics.positive} %
          </li>
        </ul>
      </div>
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
  const statetistics = {good, neutral, bad, total, average, positive}

  return (
    <div>
      <h1>Give us feedback</h1>
      <Button increase={() => setGood(good + 1)} text='add'/>
      <Button increase={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button increase={() => setBad(bad + 1)} text='bad'/>
      <Statetistics statetistics={statetistics}/>
    </div>
  )
}

export default App
