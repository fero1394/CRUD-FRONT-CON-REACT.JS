import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, Button, Container, Modal,ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import { tab } from '@testing-library/user-event/dist/tab';

const data = [
  {id: 1, personaje: "Naruto", anime: "Naruto"},
  {id: 2, personaje: "Goku", anime: "Dragon Ball"},
  {id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin"},
  {id: 4, personaje: "Monkey D. Luffy", anime: "One Piece"},
  {id: 5, personaje: "Edward Elric", anime: "Fullmetal alchemist: Brotherhood"},
  {id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!"}
];

class App extends React.Component{
  state={
    data: data,
    form:{
      id:'',
      personaje:'',
      anime:''
    },
    modalInsertar: false,
  };

  hadleChange =e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })

  }

  mostarModalInsertar=()=>{
    this.setState({modalInsertar: true});
  }

  ocultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
  }

  render(){
  return(
    <>
     <Container>
    <br/> 
    <Button color="success" onClick={()=>this.mostarModalInsertar()}>Insertar Nuevo Personaje</Button>
    <br/> <br/>

    <Table>
      <thead><tr><th>Id</th>
      <th>Personaje</th>
      <th>Anime</th>
      <th>Acciones</th></tr></thead>
      <tbody>
        {this.state.data.map((elemento)=>(
          <tr>
            <td>{elemento.id}</td>
            <td>{elemento.personaje}</td>
            <td>{elemento.anime}</td>
            <td><Button color="primary">Editar</Button>{" "}
            <Button color="danger">Eliminar</Button></td>
          </tr>
        ))}


      </tbody>
    </Table>
    </Container> 
    
    <Modal isOpen={this.state.modalInsertar}>
      <ModalHeader>
        <div>
          <h3>Insertar Registro</h3>
        </div>
      </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
            </FormGroup>

            <FormGroup>
            <label>Personaje:</label>
              <input className="form-control"  name="personaje" type="text" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <label>Anime:</label>
              <input className="form-control" name="anime" type="text" onChange={this.handleChange}/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">Insertar</Button>
            <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
    </Modal>
    </>
    );
  }
}

export default App;
