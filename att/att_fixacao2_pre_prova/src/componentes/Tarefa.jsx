export default function Tarefa({ tarefa, onToggle }) {
  return (
    <li
      style={{ backgroundColor: tarefa.concluida ? '#d4edda' : '#f8d7da',
        textDecoration: tarefa.concluida ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
      onClick={() => onToggle(tarefa.id)}
    >
      {tarefa.nome}
    </li>
  );
}
