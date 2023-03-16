import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Player } from './components/Player';

function App() {


  const [players, setPlayers] = useState([
    {
      name: "Japor",
      id: 1,
    },
    {
      name: "Sarah",
      id: 2,
    },
    {
      name: "Andrei",
      id: 3,
    },
    {
      name: "Kenneth",
      id: 4,
    },
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  }

  return (
    <div className="App">
      <Header title="Scoreboard" totalPlayers={players.length} />
      <div className="body">
        {players.map((player) => <Player key={player.id} {...player} removePlayer={handleRemovePlayer} />)}
      </div>
    </div>
  );
}

export default App;
