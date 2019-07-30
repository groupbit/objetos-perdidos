import React from 'react';
import { Button } from 'reactstrap';

var moment = require('moment');

class ObjetoPerdidoRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectObjetoPerdido = this.selectObjetoPerdido.bind(this);
        this.actualizar = this.actualizar.bind(this)
    }
    
    selectObjetoPerdido() {
        this.props.selector(this.props.objetoPerdido)
    }

    actualizar() {
        this.props.actualizarListaDeObjetos(this.props.objetoPerdido)
    }
    handleSubmit(id) {
        fetch("http://localhost:8888/objetosPerdidos/" + id, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }).then(this.actualizar);
      }

    render() {      
        return(
            <tr onClick={this.selectObjetoPerdido}>
              <td>{moment(this.props.objetoPerdido.fechaIngresado).format('YYYY-M-DD')}</td>
              <td>{this.props.objetoPerdido.descripcion}</td>
              <td>{this.props.objetoPerdido.lugar}</td>
              <td>{this.props.objetoPerdido.estado ? "Perdido" : "Encontrado" }  </td>
              <td><Button color="danger" onClick={() => {
                  this.handleSubmit(this.props.objetoPerdido._id);
                  }}>Borrar</Button></td>
          </tr>)
      
    }
}

  export default ObjetoPerdidoRow
