import React, { useState } from 'react';
import Gallery from './components/Gallery';
import ThemeToggle from './components/ThemeToggle';
import Details from './components/Details';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const handleCharacterClick = (character) => {
        if (selectedCharacter === character) {
            // Se o mesmo personagem for clicado novamente, deseleciona
            setSelectedCharacter(null);
        } else {
            // Caso contrário, seleciona o novo personagem
            setSelectedCharacter(character);
        }
    };

    return (
        <div className={`app ${theme}`}>
            <ThemeToggle toggleTheme={toggleTheme} />
            <Gallery setSelectedCharacter={handleCharacterClick} />
            {selectedCharacter && <Details character={selectedCharacter} />}
        </div>
    );
}

export default App;