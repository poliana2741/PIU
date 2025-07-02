export default function MoverTarefa({ id, index, total, onMove }) {
    return (
        <div className="controle-ordem">
            <button 
                onClick={() => onMove(id, 'up')}
                disabled={index === 0}
            >
                ↑
            </button>
            
            <button 
                onClick={() => onMove(id, 'down')}
                disabled={index === total - 1}
            >
                ↓
            </button>
        </div>
    )
}