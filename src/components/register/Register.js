import React, { Component } from 'react'
import '../../assets/register.css';
import { Link } from 'react-router-dom';
import auth from '../../services/auth-service';
import { DatePicker, Toast } from "react-materialize";
import M from 'materialize-css';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            dob: '',
            fname: '',
            lname: ''
        }
    }
    render() {
        return (
            <div className="section">
                <div className="section"></div>
                <div className="container">
                    <center>
                        <h5 className="indigo-text">Register your account</h5>
                    </center>
                    <div className="section"></div>
                    <div className="z-depth-1 grey lighten-4 row padd-20">
                        <form id="register" className="col s12" onSubmit={(e) => this.handleSubmit(e)} >
                            <div className='row'>
                                <div className='input-field col s6'>
                                    <input type='text' minLength="5" required name='fname' onChange={(event) => this.setState({ fname: event.target.value })} />
                                    <label htmlFor='email'>Enter your First name</label>
                                </div>
                                <div className='input-field col s6'>
                                    <input type='text' required name='lname' onChange={(event) => this.setState({ lname: event.target.value })} />
                                    <label htmlFor='email'>Enter your Last name</label>
                                </div>
                                <div className='input-field col s12'>
                                    <input type='text' required name='username' onChange={(event) => this.setState({ username: event.target.value })} />
                                    <label htmlFor='email'>Enter your username</label>
                                </div>
                                <div className='input-field col s12'>
                                    <input type='password' required name='password' onChange={(event) => this.setState({ password: event.target.value })} />
                                    <label htmlFor='email'>Enter your Password</label>
                                </div>
                                <div className='input-field s12'>
                                    <DatePicker
                                        label="Date of Birth"
                                        id="myDate"
                                        onChange={(newval) => this.setState({ dob: newval })} />
                                </div>
                            </div>
                            <div>
                                <button className="waves-effect waves-light btn">Register</button>
                            </div>
                        </form>
                    </div>
                    <center>
                        <Link to={'/login'}>Already Registered</Link>
                    </center>
                </div>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        auth.SignUp(this.state)
            .then(function (response) {
                //handle success
                // this.formReset();
                M.toast({html: 'Registered Successfully'})
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    formReset = () => {
        document.getElementById("register").reset();
    }

}

export default Register