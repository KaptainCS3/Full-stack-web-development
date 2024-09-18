import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      {props.parts.map((el) => (
        <Part part={el.name} exercise={el.exercises} />
      ))}
    </div>
  );
};

export default Content;
