import React from 'react';
import { Table } from 'reactstrap';
import ObjetoPerdidoRow from './ObjetoPerdidoRow'
import ObjetoPerdidoForm from './ObjetoPerdidoForm'

const API_HOST = process.env.REACT_APP_API_HOST || 'localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 8888;

const API_URL = `//${API_HOST}:${API_PORT}`;

class ObjetosPerdidosList extends React.Component {

    constructor(props) {
      super(props);
      this.state= { objetosPerdidos: [],selected:{}}
      this.select = this.select.bind(this);
      this.listado =this.listado.bind(this);
      this.objetoPerdidoChange=this.objetoPerdidoChange.bind(this);
    }

    componentWillMount() {
      fetch(`http://localhost:8888/objetosPerdidos`)
        .then( res => res.json())
        .then( prds => this.setState({objetosPerdidos: prds}));
    }

    render() {
      if(this.state.objetosPerdidos.length > 0) {
      return (
        <div className="objetosPerdidosCSS">
          <h2>Objetos Perdidos</h2>
          <ObjetoPerdidoForm
            objetoPerdido={this.state.selected}
            objetoPerdidoChange={this.state.objetoPerdidoChange}
            listado ={this.listado}
          />
          
          <Table className="table" striped>
            <thead>
              <tr>
                <th>Fecha de ingreso</th>
                <th>Detalles</th>
                <th>Lugar perdido/encontrado</th>
                <th>Estado</th>
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
          <ObjetoPerdidoRow
           objetoPerdido={unObjetoPerdido}
           selector={this.select} />
        );
      })
    }
    select(unObjetoPerdido){
      this.setState({selected:unObjetoPerdido})
    }
    objetoPerdidoChange(unObjetoPerdido) {
      var newObjetosPerdidos = this.state.objetosPerdidos.map((item) => (unObjetoPerdido._id !== item._id) ? item : unObjetoPerdido )
      this.setState({objetosPerdidos: newObjetosPerdidos, selected:unObjetoPerdido})
    }
    listado(){
      this.componentWillMount();
    }
  }

export default ObjetosPerdidosList