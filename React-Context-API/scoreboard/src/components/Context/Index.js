import { createContext, Component, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

const Context = createContext();

export const Provider = ({ children }) => {

  const [players, setPlayers] = useState([
    {
      name: "Japor",
      id: "1",
      score: 0,
    },
    {
      name: "Sarah",
      id: "2",
      score: 0,
    },
    {
      name: "Andrei",
      id: "3",
      score: 0,
    },
    {
      name: "Kenneth",
      id: "4",
      score: 0,
    },
  ]);


  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(player => player.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.id === id) {

        return {
          name: player.name,
          id: player.id,
          score: player.score + delta,
        };
      }
      return player;
    }));
  }

  const handleAddPlayer = (name) => {
    setPlayers(prevPlayers => {
      return [...prevPlayers, {
        name,
        id: uuid(),
        score: 0,
      }]
    });
  }

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const scores = players.map(player => player.score);
    setHighScore(Math.max(...scores));
  }, [players])
  return (
    <Context.Provider
      value={{
        players: players,
        actions: {
          changeScore: handleScoreChange,
          removePlayer: handleRemovePlayer,
          addPlayer: handleAddPlayer,
        },
        highScore: highScore,
      }}
    >
      {children}
    </Context.Provider >
  );

}
export const Consumer = Context.Consumer;
