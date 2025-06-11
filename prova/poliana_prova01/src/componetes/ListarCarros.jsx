import { carros } from './dados_carro'; // importando os dados do arquivo js em formato de array  para poder usa los, ex colocalos nas tags html para serem redenrizadas


export default function ListarCarros() {  // aqui esta criando a funçao ja fazendo a exportação
  const carros2019 = carros.filter(carro => carro.ano > 2019); // criaçao de uma varievel com o filtro dos carros antes de retonar o conteudo, q vai guardar os valores, para poder exibir os dados filtrados

  return ( // retornando o conteudo em html para ser visto
    <div>
        <h4>todos os carros</h4>
        
      <ul>
        {carros.map((carro) => ( // metodo de percorrer array, onde rasttreia o 'dicionario' e usa como parametro um elemento q sera usado para especificar a chave do valor
          <p> 
            {carro.modelo} | {carro.cor}
          </p>
        ))}
      </ul>

        <h4>carros acima de 2019</h4>

      <ul>
        {carros2019.map((carro) => ( // metodo de percorrer array, onde rasttreia o 'dicionario' e usa como parametro um elemento q sera usado para especificar a chave do valor
            <p> {carro.modelo} </p>
        ))}
      </ul>
    </div>
  );
}
