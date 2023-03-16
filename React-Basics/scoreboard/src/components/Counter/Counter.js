import './Counter.css';
import React, { useState } from 'react';

export const Counter = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="Counter">
      <button className="counter-action decrement" onClick={() => setScore(score - 1)}> - </button>
      <span className="counter-score"> {score} </span>
      <button className="counter-action increment" onClick={() => setScore(score + 1)}> + </button>
    </div >
  );
};
