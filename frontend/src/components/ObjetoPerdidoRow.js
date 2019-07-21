import React from 'react';

var moment = require('moment');

class ObjetoPerdidoRow extends React.Component {

    constructor(props) {
        super(props);
        this.selectObjetoPerdido = this.selectObjetoPerdido.bind(this);
    }
    
    selectObjetoPerdido() {
        this.props.selector(this.props.objetoPerdido)
    }

    render() {      
        return(
            <tr onClick={this.selectObjetoPerdido}>
              <td>{moment(this.props.objetoPerdido.fechaIngresado).format('YYYY-M-DD')}</td>
              <td>{this.props.objetoPerdido.descripcion}</td>
              <td>{this.props.objetoPerdido.lugar}</td>
              <td>{this.props.objetoPerdido.estado ? "Perdido" : "Encontrado" }  </td>
          </tr>)
      
    }
}

  export default ObjetoPerdidoRow
