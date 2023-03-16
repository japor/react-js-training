import './Header.css';

export const Header = ({ title, totalPlayers }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <span className="stats"> Players: {totalPlayers}</span>
    </div>
  );
};
