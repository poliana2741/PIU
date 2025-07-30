import Tarefa from './Tarefa';

export default function ListaTarefas({ tarefas, onToggle }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} onToggle={onToggle} />
      ))}
    </ul>
  );
}
