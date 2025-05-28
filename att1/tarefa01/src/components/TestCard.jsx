import React from 'react';
import Card from './Card';

const TestCard = () => {
    const character = { name: 'Personagem 1', image: 'path/to/image1.jpg' };

    const handleClick = (char) => {
        alert(`Character clicked: ${char.name}`);
    };

    return <Card character={character} onClick={handleClick} />;
};

export default TestCard;