import { useEffect, useState } from 'react';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <ul>
      {usuarios
        .filter(user => user.id <= 5) // critério arbitrário
        .map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
    </ul>
  );
}
