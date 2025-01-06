import { useState } from 'react'

const Button = ({increase, text}) => <button onClick={increase}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give us feedback</h1>
      <Button increase={() => setGood(good + 1)} text='add'/>
      <Button increase={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button increase={() => setBad(bad + 1)} text='bad'/>
      <h1>statistics</h1>
      <ul>
        <li>
          <b>good {good}</b>
        </li>
        <li>
          <b>neutral {neutral}</b>
        </li>
        <li>
          <b>bad {bad}</b>
        </li>
      </ul>
    </div>
  )
}

export default App
