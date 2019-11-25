import React, { Component } from 'react';
import '../../assets/main.css'
import { Link } from 'react-router-dom';


class Sidemenu extends Component {
    render() {
        return (
            <div className="sidemenu">
                <div className="profile">
                    <img src="https://www.putneyhigh.gdst.net/wp-content/uploads/2018/06/person-placeholder-male-5.jpg"></img>
                    <center>
                        <p>Welcome User</p>
                    </center>
                </div>
                <ul>
                    <li><Link to={'/users'} activeClassName="active" onlyActiveOnIndex>Users</Link></li>
                    <li><Link to={'/permission'} activeClassName="active" onlyActiveOnIndex>Permissions</Link></li>
                    <li><Link to={'/logout'} activeClassName="active" onlyActiveOnIndex>Logout</Link></li>
                </ul>
            </div>
        )
    }

}

export default Sidemenu;
