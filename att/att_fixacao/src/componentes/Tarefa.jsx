import React from 'react';

const Tarefa = ({ item, index, marcarComoRealizada, marcarComoNaoRealizada, reorganizarTarefas }) => {
    return (
        <li>
            {item.texto} - {item.status}
            <button onClick={() => marcarComoRealizada(index)}>Realizada</button>
            <button onClick={() => marcarComoNaoRealizada(index)}>Não Realizada</button>
            {index > 0 && (
                <button onClick={() => reorganizarTarefas(index, index - 1)}>↑</button>
            )}
            {index < lista.length - 1 && (
                <button onClick={() => reorganizarTarefas(index, index + 1)}>↓</button>
            )}
        </li>
    );
};

export default Tarefa;