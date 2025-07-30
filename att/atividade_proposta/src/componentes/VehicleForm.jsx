import React, { useState } from 'react';

function VehicleForm() {
  const [formData, setFormData] = useState({
    nome: '',
    marca: '',
    modelo: '',
    placa: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    
    try {
      const response = await fetch('http://127.0.0.1:8000/veiculos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Erro ao cadastrar veículo');
      }

      const data = await response.json();
      setMessage('Veículo cadastrado com sucesso!');
      console.log('Resposta da API:', data);
      
      // Limpar o formulário após o sucesso
      setFormData({
        nome: '',
        marca: '',
        modelo: '',
        placa: ''
      });
    } catch (err) {
      setError(err.message);
      console.error('Erro:', err);
    }
  };

  return (
    <div >
      <h2>Cadastro de Veículo</h2>
      {message && <div >{message}</div>}
      {error && <div >{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="nome" >Nome do Veículo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="marca" style={{ display: 'block', marginBottom: '5px' }}>Marca:</label>
          <input
            type="text"
            id="marca"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="modelo" style={{ display: 'block', marginBottom: '5px' }}>Modelo:</label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="placa" style={{ display: 'block', marginBottom: '5px' }}>Placa:</label>
          <input
            type="text"
            id="placa"
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <button type="submit">
          Cadastrar Veículo
        </button>
      </form>
    </div>
  );
}

export default VehicleForm;