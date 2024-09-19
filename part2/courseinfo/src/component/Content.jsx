import React from "react";
import Part from "./Part";

const Content = (props) => {
  return <Part part={props.parts.name} exercise={props.parts.exercises} />;
};

export default Content;
