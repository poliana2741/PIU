import React from "react";
import { useState, useEffect } from 'react';

export default function Cor() {
    const [cor , setCor] = useState('');
    useEffect(() => {
        mudarCor();
    }, [cor]);

    const mudarCor = () => {
        document.body.style.backgroundColor = cor;
    };
    const handleChange = (e) => {
        setCor(e.target.value);

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", e.target.email.value);
        console.log("Cor escolhida: ", cor);
        mudarCor();
    };
    return(

        <div>
           <input type="text" name="" id="" placeholder="email" />
            <select value={cor} onChange={handleChange}>
                <option value="">selecione</option>
                <option value="red">vermelho</option>
                <option value="blue">azul</option>
            </select>
            <button onClick={handleSubmit}>enviar</button>
        </div>

    )
}