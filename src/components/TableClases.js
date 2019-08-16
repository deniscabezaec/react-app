import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableClases extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('https://api.alexkbza.com/class/delete/'+this.props.obj.idmateria)
            .then(console.log('Eliminado'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.idmateria}
          </td>
          <td>
            {this.props.obj.materia}
          </td>
          <td>
            {this.props.obj.dia}
          </td>
          <td>
            {this.props.obj.horainicio}
          </td>
          <td>
            {this.props.obj.horafinal}
          </td>
          <td>
            {this.props.obj.docente}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Editar</Link>
            <button onClick={this.delete} className="btn btn-danger">Eliminar</button>
          </td>
        </tr>
    );
  }
}

export default TableClases;