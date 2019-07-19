import React from 'react';
import './App.css';
import ObjetosPerdidosList from './components/ObjetosPerdidosList'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink as Link} from "react-router-dom"
import { Nav, NavItem, NavLink } from 'reactstrap';

function ObjetosPerdidosComponent() {
  return (<ObjetosPerdidosList objetos="objetosPerdidos"/>)
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
        </Nav>
      <main className="App-main">
          <Switch>
            
            <Route path="/objetosPerdidos"  component={ObjetosPerdidosComponent} />
            <Redirect to="/" />
          </Switch>
      </main>
      </Router>
    </div>
  );
}

export default App;
