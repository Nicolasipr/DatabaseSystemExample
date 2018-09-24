import React, { Component } from "react";
import { Textfield, Button }from 'react-mdl'
import {Link} from 'react-router-dom';

    
class Register extends  Component {

    state = {
        user:{
            id: 21,
            username: "",
            password: "",
            check_password: "",
            password_has_error: false,
            email: ""
            
        }
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers = _ => {
        fetch('http://localhost:4000/users')
        .then(response => response.json())
        .then(response => this.setState({ user: response.data}))
        .catch( err => console.log(err))
    }

    addUser = _ =>{
        const {user} = this.state;
        fetch(`http://localhost:4000/users/add?username=${user.username}&email=${user.email}&contrasena=${user.password}`)
        .then(this.getUsers)
        .catch(err => console.error(err))
    }

    // checkPassword() {
    //     if (!this.state.password || this.state.password !== this.state.check_password) {
    //         this.setState({
    //             password_has_error: true
    //         });
    //     } else {
    //         this.setState({
    //             password_has_error: false
    //         });
    //     }
    // }
    
    render(){
        const {user} = this.state;
        return ([ 
                <div class="row container"  style={{minHeight: "60vh"}}>  
                    <div class="mdl-layout-spacer"></div>
                    <div class="mdl-grid" style={{justifyContent: "center" }}>
                    <div class="mdl-layout-spacer"></div>

                    <div class="demo-card-square mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col" style = {{width: 400,
                        height: 450}}>
                            <div class="mdl-card__title">
                            
                        <h2 style={{textAlign: "center", margin: "0 auto"}} class="mdl-card__title-text">Sign In</h2>
                        </div>
                        <div class="mdl-card__supporting-text" style={{textAlign: "center", margin: "0 auto"}}>
                            Crea una cuenta.
                        </div>
                        <div class="mdl-card__actions"  >
                        
                        <Textfield
                                value={user.username}
                                onChange={ e => this.setState({ user: { ...user, username: e.target.value }})}
                                label="Usuario"
                                style={{width: '480px'}}
                                
                            />
                            <div class="mdl-layout-spacer"></div>
                            <Textfield
                                value={user.email}
                                onChange={ e => this.setState({ user: { ...user, email: e.target.value }})}
                                label="email"
                                type="email"
                                style={{width: '480px'}}
                                
                            />
                            <div class="mdl-layout-spacer"></div>
                            <Textfield
                                value={user.password}
                                onChange={ e => this.setState({ user: { ...user, password: e.target.value }})}
                                type="password"
                                label="Contraseña"
                                style={{width: '480px'}}
                            />
                            <Textfield
                                value={user.check_password}
                                onChange={ e => this.setState({ user: { ...user, check_password: e.target.value }})}
                                type="password"
                                label="Confirmar Contraseña"
                                style={{width: '480px'}}
                            />
                            {/* <div class="mdl-card__actions" style={{textAlign: "center", margin: "0 auto"}}>
                                    <Button>Recuperar Contraseña</Button>
                                    <Button raised ripple onClick={() => {console.log("Logging in"); } }>Sign In</Button>
                            </div>
                            <div class="mdl-card__supporting-text" style={{textAlign: "center", margin: "0 auto"}}> 
                            ¿No tienes cuenta? Puedes registrarte aquí. 
                            </div> */}
                        <div class="mdl-card__actions" style={{textAlign: "center", margin: "0 auto"}}>
                                    <Button style={{width: '300px', background:"#8d6e63", color: "White"}} raised ripple 
                                            onClick={this.addUser}>
                                            <Link to="/register"></Link>Registrarse</Button>
                                    
                            </div>
                        
                        </div>
                    </div>
                    <div class="mdl-layout-spacer"></div>
                </div>

                </div>]);
    }
}

export default Register;