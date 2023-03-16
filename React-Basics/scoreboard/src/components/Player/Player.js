import './Player.css';
import { Counter } from "../Counter/Counter";

export const Player = ({ id, name, removePlayer }) => {
  return (
    <div className="Player">
      <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
      <span className="player-name">{name}</span>{ }
      <Counter />
    </div>
  );
};
