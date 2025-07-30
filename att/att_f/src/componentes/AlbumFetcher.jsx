// import React, { useEffect, useState } from 'react';

// export default function AlbumFetcher() {
//   const [userId, setUserId] = useState(1);
//   const [albums, setAlbums] = useState([]);
//   const [reload, setReload] = useState(false);

//   const fetchAlbums = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/albums');
//       const data = await response.json();
//       const filtered = data.filter(album => album.userId === Number(userId));
//       setAlbums(filtered);
//     } catch (error) {
//       console.error('Erro ao buscar álbuns:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAlbums();
//   }, [userId, reload]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     if (value >= 1 && value <= 10) {
//       setUserId(Number(value));
//     }
//   };

//   const handleReload = () => {
//     setReload(prev => !prev);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Álbuns por UserID</h2>

//       <label>
//         Digite um UserID (1 a 10):{' '}
//         <input
//           type="number"
//           min="1"
//           max="10"
//           value={userId}
//           onChange={handleInputChange}
//         />
//       </label>

//       <button onClick={handleReload} style={{ marginLeft: '10px' }}>
//         Recarregar Álbuns
//       </button>

//       <ul>
//         {albums.map(album => (
//           <li key={album.id}>
//             <strong>{album.title}</strong>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';

export default function AlbumFetcher() {
  const [userId, setUserId] = useState('');
  const [albums, setAlbums] = useState([]);
  const [reload, setReload] = useState(false);
  const [error, setError] = useState('');

  const fetchAlbums = async () => {
    if (userId < 1 || userId > 10) {
      setAlbums([]);
      setError('Digite um número entre 1 e 10');
      return;
    }

    setError('');
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
    if (userId !== '') {
      fetchAlbums();
    }
  }, [userId, reload]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setUserId(value);
    }
  };

  const handleReload = () => {
    setReload(prev => !prev);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Buscar álbuns por userID</h2>

      <input
        type="text"
        value={userId}
        onChange={handleInputChange}
        placeholder="Digite um número de 1 a 10"
        className="border p-2 rounded mb-2"
      />

      <button
        onClick={handleReload}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Recarregar
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4 list-disc pl-5">
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
