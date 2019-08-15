import React, { Component } from 'react';
import axios from 'axios';
import TableClases from './TableClases';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('https://api.alexkbza.com/class')
        .then(response => {
          this.setState({ business: response.data});
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabClases(){
      return this.state.business.map(function(object, i){
          return <TableClases obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Horarios de clases</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Laboratorio</th>
                <th>Materia</th>
                <th>Día</th>
                <th>Hora Inicio</th>
                <th>Hora Final</th>
                <th>Docente</th>
                <th colSpan="2">Aciones</th>
              </tr>
            </thead>
            <tbody>
              { this.tabClases() }
            </tbody>
          </table>
        </div>
      );
    }
  }