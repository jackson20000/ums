import React, { useState } from 'react';
import '../../assets/main.css';
import { Link } from 'react-router-dom';
import auth from '../../services/auth-service';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleName = e => {
        setUsername(e.target.value);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
    };
    const handleSubmit= (e)=>{
        e.preventDefault();
        auth.Login({username,password})
            .then(function (response) {
                //handle success
                if (response.data.success) {
                    auth.auth(response.data.token);
                } else {
                    alert('Invalid credentilas');
                }
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    return (
        <div className="section login">
            <main>
                <center>
                    <div className="section"></div>
                    <h5 className="indigo-text">Please, login into your account</h5>
                    <div className="section"></div>

                    <div className="container">
                        <div className="z-depth-1 grey lighten-4 row logcom">
                            <form className="col s12" onSubmit={(e) => handleSubmit(e)} >
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input type='text' required name='username' onInput={e => handleName(e)} />
                                        <label htmlFor='email'>Enter your username</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input type='password' required name='password' onInput={e => handlePassword(e)}/>
                                        <label htmlFor='password'>Enter your password</label>
                                    </div>
                                    <label className="flt-right">
                                        <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                    </label>
                                </div>
                                <br />
                                <center>
                                    <div className='row'>
                                        <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect'>Login</button>
                                    </div>
                                </center>
                            </form>
                        </div>
                    </div>
                    <Link to={'/register'}>Create account</Link>
                </center>
            </main>
        </div>
    )
}

export default Login;