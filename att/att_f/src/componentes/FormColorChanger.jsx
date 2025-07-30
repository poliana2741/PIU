import React, { useState } from 'react';

export default function FormColorChanger() {
  const [inputText, setInputText] = useState('');
  const [color, setColor] = useState('blue');

  const palavraEspecial = 'react';

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    if (value.toLowerCase().includes(palavraEspecial)) {
      setColor('green');
    } else {
      setColor('blue');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Formulário com Mudança de Cor</h2>

      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Digite algo..."
        style={{
          padding: '10px',
          fontSize: '16px',
          color: color,
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />

      <p style={{ marginTop: '10px', color: color }}>
        Texto digitado: {inputText}
      </p>
    </div>
  );
}
