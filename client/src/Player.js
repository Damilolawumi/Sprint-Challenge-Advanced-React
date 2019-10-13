import React from 'react';
import useLocalSorage from './useLocalStorage';
import styled from 'styled-components';


const P = styled.p`
padding-left: 10px;
`;

function Player(props) {

    const [player, setPlayers] = useLocalSorage('p', props.player);

    return (
        <div>
            <P>{player.id}</P>
            <P><h3>{player.name}</h3></P>
            <P>{player.country}</P>
            <P>{player.searches}</P>
        </div>
    )
}

export default Player;