import React from 'react'
import Button from './Button';
const Buttons = (props) => {
  return (
    <>
      <Button text="good" handleAction={props.updateGoodState} />
      <Button text="neutral" handleAction={props.updateNeutralState} />
      <Button text="bad" handleAction={props.updateBadState} />
    </>
  );
};

export default Buttons