import { useState } from 'react';
import './Kanban.css';

export default function Kanban() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = (e) => {
        e.preventDefault();
        if (novaTarefa.trim() === '') return;
        
        setTarefas([...tarefas, {
            id: Date.now(),
            texto: novaTarefa,
            status: 'pendente'
        }]);
        setNovaTarefa('');
    };

    const atualizarStatus = (id, novoStatus) => {
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, status: novoStatus } : tarefa
        ));
    };

    const moverTarefa = (id, direcao) => {
        const index = tarefas.findIndex(t => t.id === id);
        const novoIndex = direcao === 'up' ? index - 1 : index + 1;
        
        if (novoIndex >= 0 && novoIndex < tarefas.length) {
            const novasTarefas = [...tarefas];
            [novasTarefas[index], novasTarefas[novoIndex]] = 
            [novasTarefas[novoIndex], novasTarefas[index]];
            setTarefas(novasTarefas);
        }
    };

    return (
        <div className="kanban-container">
            <h1>Kanban de Tarefas</h1>
            
            <form onSubmit={adicionarTarefa} className="task-form">
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Digite uma nova tarefa..."
                    className="task-input"
                />
                <button type="submit" className="add-button">Adicionar</button>
            </form>

            {tarefas.length === 0 ? (
                <p className="empty-message">Nenhuma tarefa cadastrada</p>
            ) : (
                <ul className="task-list">
                    {tarefas.map((tarefa, index) => (
                        <li 
                            key={tarefa.id} 
                            className={`task-item ${tarefa.status}`}
                        >
                            <div className="task-text">{tarefa.texto}</div>
                            
                            <div className="task-controls">
                                <div className="status-controls">
                                    <button
                                        className={`status-btn realizada ${tarefa.status === 'realizada' ? 'active' : ''}`}
                                        onClick={() => atualizarStatus(tarefa.id, 'realizada')}
                                        title="Marcar como realizada"
                                    >
                                        ✓
                                    </button>
                                    <button
                                        className={`status-btn pendente ${tarefa.status === 'pendente' ? 'active' : ''}`}
                                        onClick={() => atualizarStatus(tarefa.id, 'pendente')}
                                        title="Marcar como pendente"
                                    >
                                        ↻
                                    </button>
                                    <button
                                        className={`status-btn nao-realizada ${tarefa.status === 'nao-realizada' ? 'active' : ''}`}
                                        onClick={() => atualizarStatus(tarefa.id, 'nao-realizada')}
                                        title="Marcar como não realizada"
                                    >
                                        ✗
                                    </button>
                                </div>
                                
                                <div className="move-controls">
                                    <button
                                        className="move-btn"
                                        onClick={() => moverTarefa(tarefa.id, 'up')}
                                        disabled={index === 0}
                                        title="Mover para cima"
                                    >
                                        ↑
                                    </button>
                                    <button
                                        className="move-btn"
                                        onClick={() => moverTarefa(tarefa.id, 'down')}
                                        disabled={index === tarefas.length - 1}
                                        title="Mover para baixo"
                                    >
                                        ↓
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}