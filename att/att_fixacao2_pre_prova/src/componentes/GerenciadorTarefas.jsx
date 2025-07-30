import { useState, useEffect } from 'react';

export default function GerenciadorTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Carrega as tarefas do backend ao iniciar
  useEffect(() => {
    fetch('http://localhost:8000/tarefas/')
      .then((res) => res.json())
      .then((data) => setTarefas(data))
      .catch((err) => console.error('Erro ao carregar tarefas:', err));
  }, []);

  // Cadastrar nova tarefa
  const handleAdd = () => {
    if (!novaTarefa.trim()) return;

    const nova = {
      id: Date.now(),
      nome: novaTarefa,
      concluida: false,
    };

    fetch('http://localhost:8000/tarefas/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nova),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao cadastrar tarefa');
        return res.json();
      })
      .then((data) => {
        setTarefas((prev) => [...prev, data]);
        setNovaTarefa('');
      })
      .catch((err) => console.error(err.message));
  };

  // Alternar tarefa concluída / não concluída
  const toggleTarefa = (id) => {
    const tarefaAtual = tarefas.find((t) => t.id === id);
    if (!tarefaAtual) return;

    const atualizada = { ...tarefaAtual, concluida: !tarefaAtual.concluida };

    fetch(`http://localhost:8000/tarefas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(atualizada),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao atualizar tarefa');
        return res.json();
      })
      .then((data) => {
        setTarefas((tarefas) =>
          tarefas.map((t) => (t.id === id ? data : t))
        );
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '400px', margin: 'auto' }}>
      <h2>Gerenciador de Tarefas</h2>

      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite o nome da tarefa"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <button onClick={handleAdd} style={{ padding: '8px 16px' }}>
        Cadastrar
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            onClick={() => toggleTarefa(tarefa.id)}
            style={{
              backgroundColor: tarefa.concluida ? '#d4edda' : '#f8d7da',
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              padding: '10px',
              marginBottom: '8px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            {tarefa.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
