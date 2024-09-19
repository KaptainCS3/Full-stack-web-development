import { useState } from "react";
import Header from "./component/Header";
import Buttons from "./component/Buttons";
const App = () => {
  const title1 = "Anecdote of the day";
  const title2 = "Anecdote with most votes";
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(
    new Array(7 + 1).join("0").split("").map(parseFloat)
  );

  const voteAnecdote = (pos) => {
    const increaseCount = points.map((el, index) => {
      if (index === pos) {
        return el + 1;
      } else {
        return el;
      }
    });
    setPoints(increaseCount);
  };

  const nextAnecdote = () => {
    if (selected >= anecdotes.length - 1) {
      return setSelected(0);
    }
    setSelected(selected + 1);
  };

  const index = Math.max(...points);
  const mostVoteIndex = points.indexOf(index);

  return (
    <div>
      <Header title={title1} />
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Buttons
        nextAnecdote={nextAnecdote}
        voteAnecdote={() => voteAnecdote(selected)}
      />
      <Header title={title2} />
      {anecdotes[mostVoteIndex]}
      <p>has {points[mostVoteIndex]} votes</p>
    </div>
  );
};

export default App;
