import './Player.css';
import { Counter } from "../Counter/Counter";
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context/Index';

const Player = ({ id, name, score }) => {

  return (
    <Consumer>
      {
        ({ highScore, actions }) => {
          const svgClass = () => {
            if (score === 0) {
              return '';
            }

            if (score === highScore) {
              return 'is-high-score';
            }
          };
          return (
            <div className="Player">
              <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
              <svg viewBox="0 0 44 35" className={svgClass()}>
                <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)" />
                <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)" />
              </svg>
              <span className="player-name">{name}</span>{ }
              <Counter id={id} score={score} />
            </div>
          );
        }
      }
    </Consumer>
  );
};

const playerPropsAreEqual = (prev, next) => {
  return prev.score === next.score && prev.highScore === next.highScore;
}

export default memo(Player, playerPropsAreEqual);

Player.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  highScore: PropTypes.number,
};
