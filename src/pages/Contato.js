import React from 'react';
import { Link } from "react-router-dom";

export default function Contato(){
    return (
        <div>
            <h1>Contato</h1>
            <h4>Telefone: 2286-4926</h4>
            <h4>Email: gustavo@impacta.edu.br</h4>
            <h4>Techlab</h4>
            <Link to="/" >Voltar</Link>
        </div>
    );
}
