export default function MarcarTarefa({ status, onChange }) {
    return (
        <div className="marcador-status">
            <button 
                className={`realizada ${status === 'realizada' ? 'ativo' : ''}`}
                onClick={() => onChange('realizada')}
            >
                ✓
            </button>
            
            <button 
                className={`pendente ${status === 'pendente' ? 'ativo' : ''}`}
                onClick={() => onChange('pendente')}
            >
                ↻
            </button>
            
            <button 
                className={`nao-realizada ${status === 'nao-realizada' ? 'ativo' : ''}`}
                onClick={() => onChange('nao-realizada')}
            >
                ✗
            </button>
        </div>
    )
}