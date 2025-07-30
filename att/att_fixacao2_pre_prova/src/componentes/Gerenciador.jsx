import { useState, useEffect } from 'react';
import ListaTarefas from './ListaTarefas';

export default function Gerenciador() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleAdd = () => {
    if (!novaTarefa.trim()) return;
    const nova = { id: Date.now(), nome: novaTarefa, concluida: false };
    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
  };

  const toggleTarefa = (id) => {
    setTarefas((tarefas) =>
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  useEffect(() => {
    if (tarefas.length > 0) {
      // Envia apenas a última tarefa adicionada
      const ultima = tarefas[tarefas.length - 1];
      fetch('http://localhost:8000/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ultima),
      });
    }
  }, [tarefas]);

  return (
    <>
      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAdd}>Cadastrar</button>
      <ListaTarefas tarefas={tarefas} onToggle={toggleTarefa} />
    </>
  );
}
