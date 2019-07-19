import React from 'react';
import { Table } from 'reactstrap';
import ObjetoPerdidoRow from './ObjetoPerdidoRow'

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 8888;

const API_URL = `//${API_HOST}:${API_PORT}`;

class ObjetosPerdidosList extends React.Component {

    constructor(props) {
      super(props);
      this.state= { objetosPerdidos: []}
    }

    componentWillMount() {
      fetch(`http://localhost:8888/objetosPerdidos`)
        .then( res => res.json())
        .then( prds => this.setState({objetosPerdidos: prds, selected: ''}));
    }

    render() {
      if(this.state.objetosPerdidos.length > 0) {
      return (
        <div className="objetosPerdidosCSS">
          <h2>Objetos Perdidos</h2>
          <Table className="table" striped>
            <thead>
              <tr>
                <th>Fecha de ingreso</th>
                <th>Detalles</th>
                <th>Lugar perdido/encontrado</th>
                <th>Perdido/Encontrado</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </Table>
        </div>
      );
    }
    else {
      return (<p> Cargando {this.props.entity} </p>);
    }
    }

    renderHeaders(columns) {
      return columns.map((col, index) => {
        return (
            <th>{col}</th>
        );
      })
    }

    renderRows() {
      return this.state.objetosPerdidos.map((unObjetoPerdido, index) => {
        return (
          <ObjetoPerdidoRow objetoPerdido={unObjetoPerdido} />
        );
      })
    }
  
  }

export default ObjetosPerdidosList