import React from 'react';
import './App.css';
import ObjetosPerdidosList from './components/ObjetosPerdidosList'
import ObjetosPerdidosArchivadosList from './components/ObjetoPerdidosArchivadosList'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink as Link} from "react-router-dom"
import { Nav, NavItem, NavLink } from 'reactstrap';

function ObjetosPerdidosComponent() {
  return (<ObjetosPerdidosList objetos="objetosPerdidos"/>)
}

function ObjetosPerdidosArchivadosComponent() {
  return (<ObjetosPerdidosArchivadosList objetos="objetosPerdidos"/>)
}

function App() {
  return (
    <div className="App">
      <Router>
      <Nav>
          <NavItem>
            <NavLink tag={Link} to="/Home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/objetosPerdidos">Objetos Perdidos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/objetosPerdidosArchivados">Objetos Perdidos Archivados</NavLink>
          </NavItem>
        </Nav>
      <main className="App-main">
          <Switch>
            
            <Route path="/objetosPerdidos"  component={ObjetosPerdidosComponent} />
            <Route path="/objetosPerdidosArchivados"  component={ObjetosPerdidosArchivadosComponent} />
            <Redirect to="/" />
          </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
