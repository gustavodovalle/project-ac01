import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre (){
    return (
        <div>
          <p>Sobre:</p>
          <h4>Site em desenvolvimento de rotas, acompanhe os próximos passos em @impactaedu</h4>
          <Link to="/">Voltar</Link>
      </div>
    );
}
