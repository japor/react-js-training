
import { Consumer } from "../Context/Index";
import Player from '../Player/Player';
import PropTypes from 'prop-types';

export const PlayerList = () => {
  return (
    <Consumer>
      {
        ({ players, highScore }) => {
          return (
            <div className="body">
              {players.map((player) => <Player key={player.id} {...player} />)}
            </div>
          );
        }
      }
    </Consumer>
  );
}
