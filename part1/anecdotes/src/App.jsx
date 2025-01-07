import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Anecdote = ({ text, vote }) => {
  return (
    <div>
      <p>
        {text}
        <br></br>
        has {vote} votes
      </p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const voteAry = new Uint8Array(anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteAry)
  const votesCopy = [...votes] 

  function getRandomAnecdote(anecdotes) {
    return () => {
      const randomAnecdote = getRandomInt(anecdotes.length)
      setSelected(randomAnecdote)
    }
  }

  function vote(index) {
    return () => {
      votesCopy[index] += 1
      setVotes(votesCopy)
    }
  }

  const mostVoted = votes.indexOf(Math.max(...votes))
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={vote(selected)} text={"vote"} />
      <Button onClick={getRandomAnecdote(anecdotes)} text={"next anecdote " }/>
      <h1>Anecdote with most votes</h1>
      <Anecdote text={anecdotes[mostVoted]} vote={votes[mostVoted]} />
    </div>
  )
}

export default App