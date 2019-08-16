import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import axios from 'axios';
import "./Login.css";
import Edit from "./edit.component";
import RA from "./ra.component";
import navBar from "./admin";
import Create from "./create.component";
import Index from "./index.component";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cedula: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.cedula.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.get('https://api.alexkbza.com/usuarios/'+this.state.cedula)
            .then(response => {
                this.setState({ business: response.data});
                if((this.state.cedula == response.data.cedula) && (this.state.password == response.data.pass)){
                    alert("Bienvenido "+ response.data.nombres);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleRedirect() {



    }

    render() {
        return (
            <div>

            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <h1 align="center">Bienvenido!</h1><br></br>
                    <FormGroup controlId="cedula" bsSize="large">
                        <FormLabel>Cédula</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.cedula}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                    <Link to={'/invitado'} className="btn btn-secondary nav-link">Iniciar como Invitado</Link>
                </form>
                <Switch>
                    <Route exact path='/invitado' component={ RA } />
                </Switch>
            </div></div>
        );
    }
}
