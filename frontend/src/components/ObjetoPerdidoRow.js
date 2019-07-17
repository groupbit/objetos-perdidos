import React from 'react';

class ProductoRow extends React.Component {

    render() {      
        return(
            <tr key={this.props.objetoPerdido._id} >
              <td>{this.props.objetoPerdido.fechaIngresado}</td>
              <td>{this.props.objetoPerdido.descripcion}</td>
              <td>{this.props.objetoPerdido.lugar}</td>
              <td>{this.props.objetoPerdido.estado}</td>
          </tr>)
      
    }
}

  export default ProductoRow
