import './Counter.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ id, score, changeScore }) => {

  return (
    <div className="Counter">
      <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
      <span className="counter-score"> {score} </span>
      <button className="counter-action increment" onClick={() => changeScore(id, +1)}> + </button>
    </div >
  );
};

Counter.propTypes = {
  id: PropTypes.string,
  score: PropTypes.number,
  changeScore: PropTypes.func
};
