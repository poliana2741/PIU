import React from "react";
import { useState } from "react"; // isso esta importando o usestate para ser usado no contador

export default function Contador() { // aqui esta criando a funçao ja fazendo a exportação
  const [contador , setContador] = useState(0); // criaçao de uma variavel para armazernar o valor de incrementar e descrementar com base nos cliques 
  const incremento = () => setContador(contador + 1); // variavel seguiada da funaçao de incrementar um numero na variavel 'contador '
  const decremento = () => setContador(contador - 1);  // variavel seguiada da funaçao de decrementar um numero na variavel 'contador '

  return (
    <div>
        <p>contador</p>
        <p>{contador} </p>  
        <button onClick={incremento} 
        style={{width : contador >10 ?'500px' : '200px',
        height : contador >10 ?'500px' : '200px',
        color: 'white', backgroundColor : 'blue'}}>
        incrementa
        </button>
        <button onClick={decremento} 
        style={{width : contador < 0 ?'150px' : '200px',
        height : contador < 0 ?'70px' : '200px',
        color: 'white', backgroundColor : 'blue'}}>
        decrementa
        </button>
    </div>
    // segue a logica de usar uma tag pra mostrar o valor do contador, e logo abaixo a criaçao de um botao q vai usar o usestate para contar os cliques(ou assionar a interaçao ) , no style do botao implementar a logica de quando o contador maior q 10 e menor q 0, haver alguma mudança na proporçao dos mesmos. )
  );

}