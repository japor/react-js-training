import './Header.css';
import { Stats } from '../Stats/Stats';
import { Stopwatch } from '../Stopwatch/Stopwatch';
import PropTypes from "prop-types";

export const Header = ({ title = 'Scoreboard', players }) => {
  return (
    <div className="Header">
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};
