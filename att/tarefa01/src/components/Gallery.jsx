import React from 'react';
import Card from './Card';

const characters = [
    { name: 'Personagem 4', image: '/r.png', description: 'Descrição 4' },
    { name: 'Personagem 1', image: '/bm.jpeg', description: 'Descrição 1' },
    { name: 'Personagem 6', image: '/uk.jpg', description: 'Descrição 6' },
    { name: 'Personagem 3', image: '/lp.png', description: 'Descrição 3' },
    { name: 'Personagem 2', image: '/cp.jpg', description: 'Descrição 2' },
    { name: 'Personagem 5', image: '/sm.jpg', description: 'Descrição 5' },
];

const Gallery = ({ setSelectedCharacter }) => {
    return (
        <div className="gallery">
            {characters.map((character) => (
                <Card key={character.name} character={character} onClick={setSelectedCharacter} />
            ))}
        </div>
    );
};

export default Gallery;