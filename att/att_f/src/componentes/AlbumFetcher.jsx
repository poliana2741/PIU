import React, { useEffect, useState } from 'react';

export default function AlbumFetcher() {
  const [userId, setUserId] = useState(1);
  const [albums, setAlbums] = useState([]);
  const [reload, setReload] = useState(false);

  const fetchAlbums = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      const filtered = data.filter(album => album.userId === Number(userId));
      setAlbums(filtered);
    } catch (error) {
      console.error('Erro ao buscar álbuns:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, [userId, reload]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value >= 1 && value <= 10) {
      setUserId(Number(value));
    }
  };

  const handleReload = () => {
    setReload(prev => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Álbuns por UserID</h2>

      <label>
        Digite um UserID (1 a 10):{' '}
        <input
          type="number"
          min="1"
          max="10"
          value={userId}
          onChange={handleInputChange}
        />
      </label>

      <button onClick={handleReload} style={{ marginLeft: '10px' }}>
        Recarregar Álbuns
      </button>

      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <strong>{album.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
