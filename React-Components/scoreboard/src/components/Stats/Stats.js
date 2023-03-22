import './Stats.css';
import PropTypes from 'prop-types';

export const Stats = ({ players }) => {
    const totalScore = players.reduce((total, player) => {
        return total + player.score;
    }, 0);
    const totalPlayers = players.length;
    return (
        <div className="Stats">
            <p> Total Score: {totalScore}</p>
            <p> Players: {totalPlayers}</p>
        </div>
    );
};

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })),
};
