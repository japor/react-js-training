import './AddPlayerForm.css';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context/Index';

export const AddPlayerForm = () => {
  const playerInput = useRef();
  return (
    <Consumer>
      {
        context => {

          const handleSubmit = (event) => {
            event.preventDefault();
            const value = playerInput.current.value;
            if (!value) {
              alert("Enter first the player's name!");
              return;
            }
            context.actions.addPlayer(value);
            playerInput.current.value = "";
          };
          return (
            <form>
              <input type="text" placeholder="Enter player's name" ref={playerInput} />
              <button onClick={(event) => handleSubmit(event)}>Add Player</button>
            </form>
          );
        }
      }

    </Consumer>
  );
};
