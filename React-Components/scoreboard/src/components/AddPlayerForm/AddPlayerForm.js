import './AddPlayerForm.css';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

export const AddPlayerForm = ({ addPlayer }) => {
    const playerInput = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = playerInput.current.value;
        if (!value) {
            alert("Enter first the player's name!");
            return;
        }
        addPlayer(value);
        playerInput.current.value = "";
    };
    return (
        <form>
            <input type="text" placeholder="Enter player's name" ref={playerInput} />
            <button onClick={(event) => handleSubmit(event)}>Add Player</button>
        </form>
    );
};

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func
}
