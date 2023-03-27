import './Counter.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context/Index';

export const Counter = ({ id, score }) => {

  return (
    <Consumer>
      {
        ({ actions }) => {
          return (
            <div className="Counter">
              <button className="counter-action decrement" onClick={() => actions.changeScore(id, -1)}> - </button>
              <span className="counter-score"> {score} </span>
              <button className="counter-action increment" onClick={() => actions.changeScore(id, +1)}> + </button>
            </div >
          );
        }
      }
    </Consumer>
  );
};

Counter.propTypes = {
  id: PropTypes.string,
  score: PropTypes.number,
};
