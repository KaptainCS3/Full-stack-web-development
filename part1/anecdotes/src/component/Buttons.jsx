import React from "react";
import Button from "./Button";
const Buttons = (props) => {
  return (
    <div>
      <Button text="vote" handleAction={props.voteAnecdote} />
      <Button text="next anecdote" handleAction={props.nextAnecdote} />
    </div>
  );
};

export default Buttons;
