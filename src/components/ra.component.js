import React, { Component } from 'react';
import axios from 'axios';
import TableClases from './TableClases';
import {Link, Route, Switch} from "react-router-dom";

export default class RA extends Component {

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
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <Link to={'/'} className="navbar-brand">Laboratorios</Link>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                              <Link to={'/invitado'} className="nav-link">Iniciar como Invitado</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
              <Switch>
                  <Route path='/invitado' component={ RA } />
              </Switch>
          </div>
        <div style={{margin : 0}}>
          <a-scene embedded arjs='sourceType: webcam;'>
            <a-marker type='pattern' url='../patterns/pattern-Lab1.patt'>
              <a-plane color="#fff" height="1" width="2" rotation="-90 0 0"></a-plane>
                <a-text value="Laboratorio1"></a-text>
            </a-marker>
              <a-marker type='pattern' url='../patterns/pattern-Lab2.patt'>
                  <a-plane color="#fff" height="1" width="2" rotation="-90 0 0"></a-plane>
                  <a-text value="Laboratorio1"></a-text>
              </a-marker>
              <a-marker type='pattern' url='../patterns/pattern-Lab3.patt'>
                  <a-plane color="#fff" height="1" width="2" rotation="-90 0 0"></a-plane>
                  <a-text value="Laboratorio1"></a-text>
              </a-marker>

            <a-entity camera></a-entity>
          </a-scene>
        </div>
          </div>
      );
    }
  }