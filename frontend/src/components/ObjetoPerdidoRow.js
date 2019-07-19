import React from 'react';

var moment = require('moment');

class ObjetoPerdidoRow extends React.Component {

    render() {      
        return(
            <tr>
              <td>{moment(this.props.objetoPerdido.fechaIngresado).format('YYYY-M-DD')}</td>
              <td>{this.props.objetoPerdido.descripcion}</td>
              <td>{this.props.objetoPerdido.lugar}</td>
              <td>{this.props.objetoPerdido.estado ? "Perdido" : "Encontrado" }  </td>
          </tr>)
      
    }
}

  export default ObjetoPerdidoRow
