import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ObjetoPerdidoForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {objetoPerdido:props.objetoPerdido}
        this.estadoInicial = this.estadoInicial.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState({objetoPerdido:props.objetoPerdido})
    }
    
    handleChange(event){
      var newObjetoPerdido = Object.assign({}, this.state.objetoPerdido);
        newObjetoPerdido[event.target.name] = event.target.value;
        this.setState({objetoPerdido: newObjetoPerdido});
    }

    handleSubmit(event) {
        if(this.state.objetoPerdido._id){
          this.editarObjetoPerdido();
        } else {
          this.agregarObjetoPerdido();
        }
        event.preventDefault();
    }

    editarObjetoPerdido() {

      fetch('http://localhost:8888/objetosPerdidos', {
          method: 'PUT',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.objetoPerdido)
      }).then(res => this.props.objetoPerdidoChange(this.state.objetoPerdido))
        .then(this.estadoInicial);

    }

    agregarObjetoPerdido() {
        fetch(`http://localhost:8888/objetosPerdidos`, {
          method: "POST",
          body: JSON.stringify(this.state.objetoPerdido),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }).then(res => this.props.listado())
          .then(this.estadoInicial);
  
    }

    estadoInicial() {
        this.setState({fechaIngresado: new Date() , objetoPerdido : { descripcion: "", lugar: "", estado: "" } });
    }
    
    
    

    render() {
        return (
          <div class="container" >
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="descripcion">Descripcion</Label>
              <Input type= "text" name="descripcion" placeholder="llaves" value={this.state.objetoPerdido.descripcion} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="lugar">Lugar Perdido/Encontrado</Label>
              <Input type="text" name="lugar" placeholder="lugar" value={this.state.objetoPerdido.lugar} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="estado">Perdido/Encontrado</Label>
              <Input type="select" name="select" value={this.state.objetoPerdido.estado} onChange={this.handleChange}>
                <option>true</option>
                <option>false</option>                
              </Input>
            </FormGroup>
            <Button type="submit" value="submit">Cargar</Button>
          </Form>
          </div>
        );
      }
}
export default ObjetoPerdidoForm