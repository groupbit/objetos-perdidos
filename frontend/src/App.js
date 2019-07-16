import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntityList from './components/EntityList'
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"

function ObjetosPerdidosComponent() {
  return (<EntityList entity="objetosPerdidos"/>)
}

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <ul>
          
          <li><NavLink to="/objetosPerdidos">Objetos Perdidos</NavLink></li>
        </ul>
      </header>
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
