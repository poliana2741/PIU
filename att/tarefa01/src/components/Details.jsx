import React from 'react';

const Details = ({ character }) => {
    return (
        <div className="details">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} style={{ width: '200px', height: '200px' }} />
            <p>{character.description}</p>
        </div>
    );
};

export default Details;