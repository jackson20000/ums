const axios = require('axios');

const Login = async (data) => {
    return axios({
        method: 'post',
        url: 'http://localhost:4000/api/login',
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
};


const SignUp = async (data) => {
    return axios({
        method: 'post',
        url: 'http://localhost:4000/api/register',
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
};

const auth= (token)=>{
    sessionStorage.setItem('token', token);
}

const logout = ()=>{
    sessionStorage.clear();
}

export default { Login, SignUp, auth, logout };