import { useState, useEffect } from 'react';

export default function AlbumListByUserId() {
  // guarda os álbuns buscados
  const [albums, setAlbums] = useState([]);
  // controla carregamento
  const [loading, setLoading] = useState(false);
  // controla o valor digitado no input
  const [userId, setUserId] = useState('');
  // controla quando deve buscar os dados
  const [shouldFetch, setShouldFetch] = useState(false);
  // guarda mensagem de erro ou aviso
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }

    const idNum = Number(userId);

    if (idNum < 1) {
      setMessage('Digite um número entre 1 e 10.');
      setAlbums([]);
      setLoading(false);
      setShouldFetch(false);
      return;
    }

    if (idNum > 10) {
      setMessage('Digite um número entre 1 e 10.');
      setAlbums([]);
      setLoading(false);
      setShouldFetch(false);
      return;
    }

    async function fetchAlbums() {
      setLoading(true);
      setMessage('');
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();

        // filtra os álbuns pelo userId
        const filtrados = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].userId === idNum) {
            filtrados.push(data[i]);
          }
        }

        if (filtrados.length === 0) {
          setMessage('Nenhum álbum encontrado para esse userId.');
        }

        setAlbums(filtrados);
      } catch (error) {
        setMessage('Erro ao buscar álbuns.');
        setAlbums([]);
      } finally {
        setLoading(false);
        setShouldFetch(false);
      }
    }

    fetchAlbums();
  }, [shouldFetch, userId]);

  // Atualiza o valor do input (aceita só números e vazio)
  function handleChange(e) {
    const val = e.target.value;

    if (val === '') {
      setUserId(val);
      return;
    }

    // permite só se for número entre 1 e 10 e o texto seja igual ao número (evita letras)
    const num = Number(val);
    if (num >= 1) {
      if (num <= 10) {
        if (val === num.toString()) {
          setUserId(val);
        }
      }
    }
  }

  // dispara a busca quando clicar no botão
  function handleSearch() {
    if (userId === '') {
      setMessage('Digite um número entre 1 e 10.');
      setAlbums([]);
    } else {
      setShouldFetch(true);
    }
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Buscar Álbuns por userID</h1>

      <input
        type="text"
        placeholder="Digite userID (1 a 10)"
        value={userId}
        onChange={handleChange}
      />
      <button onClick={handleSearch} style={{ marginLeft: '8px' }}>
        Buscar
      </button>

      {message !== '' ? <p>{message}</p> : null}

      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <strong>ID:</strong> {album.id} | <strong>Título:</strong> {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}