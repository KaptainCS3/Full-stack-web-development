import { useState } from "react";
import Header from "./component/Header";
import Statistics from "./component/Statistics";
import Buttons from "./component/Buttons";

const App = () => {
  // save clicks of each button to its own state
  const heading1 = "give feedback";
  const heading2 = "statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGoodState = () => {
    setGood(good + 1);
  };
  const updateNeutralState = () => {
    setNeutral(neutral + 1);
  };
  const updateBadState = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;

  const feedbackAverage = [1, 0, -1];

  const goodAverage = feedbackAverage[0] * good;
  const neutralAverage = feedbackAverage[1] * neutral;
  const badAverage = feedbackAverage[2] * bad;

  return (
    <div>
      <Header title={heading1} />
      <Buttons
        updateGoodState={updateGoodState}
        updateNeutralState={updateNeutralState}
        updateBadState={updateBadState}
      />
      <Header title={heading2} />
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={(goodAverage + neutralAverage + badAverage) / all || 0}
          positive={(good / all) * 100 || 0}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
