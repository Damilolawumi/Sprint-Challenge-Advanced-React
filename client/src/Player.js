import React from 'react';
import useLocalSorage from './useLocalStorage';

function Player (props) {

    const [player, setPlayers] = useLocalSorage('p', props.player)

    return (
        <div>
            <p>{player.id}</p>
            <p>{player.name}</p>
            <p>{player.country}</p>
            <p>{player.searches}</p>
        </div>
    )
}

export default Player;