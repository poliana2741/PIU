import React from 'react';

const Card = ({ character, onClick }) => {
    return (
        <div onClick={() => onClick(character)} style={{ cursor: 'pointer', border: '1px solid black', margin: '10px', padding: '10px' }}>
            <img src={character.image} alt={character.name} style={{ width: '100px', height: '100px' }} />
            <h3>{character.name}</h3>
        </div>
    );
};

export default Card;