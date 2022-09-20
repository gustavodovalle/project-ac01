import React from 'react';
import ReactDOM from 'react-dom';  
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'  

import Sobre from './Sobre' 
import Contato from './Contato';

export default function Home(){
  return (
      <div>
          <h1>Bem vindo!</h1>
          <h4>Site vs React</h4>
          <Router>
            <Route path="/Sobre" component={Sobre} />  
          </Router>
          <Router>
            <Route path="/Contato" component={Contato} />  
            <ul>   
                <li>  
                  <Link to= "/sobre">Sobre</Link>  
                </li>  
                <li>  
                  <Link to= "/Contato" >Contato</Link>  
                </li>  
            </ul>  
          </Router>

      </div>
  ); 
}

