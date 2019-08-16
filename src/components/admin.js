import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from "./create.component";
import Edit from "./edit.component";
import Index from "./index.component";
import RA from "./ra.component";
import TableClases from "./TableClases";


export default class navBar extends Component {
    constructor(props) {
        super(props);
        this.state = {business: []};
    }
    render() {
        return (
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">Laboratorios</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Crear Materias</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">Ver Materias</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/marcadores'} className="nav-link">Ver</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path='/create' component={ Create } />
                        <Route path='/edit/:id' component={ Edit } />
                        <Route path='/index' component={ Index } />
                        <Route path='/marcadores' component={ RA } />
                    </Switch>
                </div>
        );
    }
}