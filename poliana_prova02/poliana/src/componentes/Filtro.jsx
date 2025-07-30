import { useState, useEffect } from "react";

export default function Filtro() {
  const [userId, setUserId] = useState(1); 
  const [albuns, setAlbuns] = useState([]);
  const [inputValue, setInputValue] = useState(""); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data.filter((album) => album.userId === Number(userId));
        setAlbuns(filtrados);
      })
      .catch((err) => console.error("Erro ao buscar álbuns:", err));
  }, [userId]);

  const buscarAlbuns = () => {
    const valor = Number(inputValue);
    if (valor >= 1 && valor <= 10) {
      setUserId(valor);
    } else {
      alert("Digite um número entre 1 e 10.");
    }
  };
  

  return (
    <div>
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Digite um userId (1 a 10)"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={buscarAlbuns}>busca</button>

      <ul>
        {albuns.map((album) => (
          <li key={album.id}>
            <strong>{album.title}</strong> (ID: {album.id})
          </li>
        ))}
      </ul>
    </div>
  );
}