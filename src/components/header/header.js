import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Action';
import { connect } from 'react-redux';

const Header = (props) => {
    const logoutUser = () => {
        localStorage.setItem("persist:root", "");
        window.location.href = "/";
        props.logoutMethod();
    }
    return (
        <nav>
            <div className="nav-wrapper" style={{backgroundColor: '#2bbbad'}}>
                <Link to={'/'} className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a onClick={() => logoutUser()}>Logout</a></li>
                </ul>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>
        </nav>
    )
}
const mapStateToProps = state => ({
    loginReducer: state
});
const mapDispatchToProps = dispatch => ({
    logoutMethod: () => dispatch(logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
