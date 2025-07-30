import { useState } from 'react';
import './Tabela.css';

export default function Tabela() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState({
    nomes: false,
    usuarios: false,
    cidades: false
  });

  const buscarUsuarios = async (tabela) => {
    setCarregando({...carregando, [tabela]: true});
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      const dados = await resposta.json();
      setUsuarios(dados);
    } catch (erro) {
      console.error('Erro ao buscar usuários:', erro);
    } finally {
      setCarregando({...carregando, [tabela]: false});
    }
  };

  return (
    <div className="container-tabelas">
      {/* Tabela de Nomes */}
      <div className="container-tabela tabela-nomes">
        <h2>Nomes dos Usuários</h2>
        <button 
          onClick={() => buscarUsuarios('nomes')} 
          disabled={carregando.nomes}
          className="botao-carregar"
        >
          {carregando.nomes ? 'Carregando...' : 'Buscar Nomes'}
        </button>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela de Usuários */}
      <div className="container-tabela tabela-usuarios">
        <h2>Nomes de Usuário</h2>
        <button 
          onClick={() => buscarUsuarios('usuarios')} 
          disabled={carregando.usuarios}
          className="botao-carregar"
        >
          {carregando.usuarios ? 'Carregando...' : 'Buscar Usuários'}
        </button>
        <table>
          <thead>
            <tr>
              <th>Nome de Usuário</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela de Cidades */}
      <div className="container-tabela tabela-cidades">
        <h2>Cidades dos Usuários</h2>
        <button 
          onClick={() => buscarUsuarios('cidades')} 
          disabled={carregando.cidades}
          className="botao-carregar"
        >
          {carregando.cidades ? 'Carregando...' : 'Buscar Cidades'}
        </button>
        <table>
          <thead>
            <tr>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}