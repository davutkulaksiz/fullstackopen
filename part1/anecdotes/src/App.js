import React, { useState } from 'react'

let index = 0;
const votes = Array(6).fill(0);
let mostVotes = 0;

function random(len) {
  return Math.floor(Math.random() * len);
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <div>
    <h2>Anecdote of the day</h2>
    {props.anectode} <br></br> has {props.votes} votes
  </div>
)

const DisplayMostVoted = (props) => (
  <div>
    <h2>Anecdote with most votes</h2>
    {props.anectode} <br></br> has {props.votes} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [vote, setVoted] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const setToSelected = () => {
    index = random(anecdotes.length)
    setSelected(index);
  }

  const setToVoted = () => {
    votes[index] += 1;
    setVoted(votes[index])
    setToMostVoted()
  }

  const setToMostVoted = () => {
    let maxIndex = votes.indexOf(Math.max(...votes));
    let max = votes[maxIndex]
    mostVotes = max;
    setMostVoted(maxIndex)
  }

  return (
    <div>
      <Display anectode = {anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={() => setToVoted()} text="vote"/>
      <Button handleClick={() => setToSelected()} text="next anectode"/>
      <DisplayMostVoted anectode = {anecdotes[mostVoted]} votes={mostVotes}/>
    </div>
  )
}

export default App