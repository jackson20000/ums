import React from 'react';
import '../../assets/main.css';
import { NavLink } from 'react-router-dom';
import { logout } from '../../Redux/Action';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';


const Sidemenu = (props) => {

    const logoutUser = () => {
        localStorage.setItem("persist:root", "");
        window.location.href = "/";
        props.logoutMethod();
    }
    return (
        <div className="sidemenu">
            <div className="profile">
                <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2018/06/person-placeholder-male-5.jpg" alt=""></img>
                <center>
                    <p>Welcome {jwt(props.loginReducer.login.token).username}</p>
                </center>
            </div>
            <ul>
                <li><NavLink exact to={'/'} activeClassName="active">Dashoard</NavLink></li>
                <li><NavLink exact to={'/users'} activeClassName="active">Users</NavLink></li>
                <li><NavLink exact to={'/permission'} activeClassName="active">Permissions</NavLink></li>
                <li><a onClick={() => logoutUser()} >Logout</a></li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    loginReducer: state
});
const mapDispatchToProps = dispatch => ({
    logoutMethod: () => dispatch(logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
