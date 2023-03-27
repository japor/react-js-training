import './Stats.css';
import PropTypes from 'prop-types';
import { Consumer } from '../Context/Index';

export const Stats = () => {

  return (
    <Consumer>
      {
        ({ players }) => {
          const totalScore = players.reduce((total, player) => total + player.score, 0);
          const totalPlayers = players.length;
          return (
            <div className="Stats">
              <p> Total Score: {totalScore}</p>
              <p> Players: {totalPlayers}</p>
            </div>
          );
        }
      }
    </Consumer>
  );
};
