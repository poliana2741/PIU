import MarcarTarefa from './MarcarTarefa'
import MoverTarefa from './MoverTarefa'

export default function ListarTarefas({ tarefas, onStatusChange, onMove }) {
    return (
        <ul className="lista-tarefas">
            {tarefas.map((tarefa) => (
                <li key={tarefa.id} className={`tarefa ${tarefa.status}`}>
                    <div className="texto-tarefa">{tarefa.texto}</div>
                    
                    <div className="controles-tarefa">
                        <MarcarTarefa 
                            status={tarefa.status}
                            onChange={(novoStatus) => onStatusChange(tarefa.id, novoStatus)}
                        />
                        
                        <MoverTarefa 
                            index={tarefas.findIndex(t => t.id === tarefa.id)}
                            total={tarefas.length}
                            onMove={onMove}
                            id={tarefa.id}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}