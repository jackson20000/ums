import React from 'react';
import Header from '../components/header/header';
import Sidemenu from '../components/sidemenu/Sidemenu';
import User from '../components/adminUser/User';

function UserOne() {
    return (
        <div>
            <Header></Header>
            <Sidemenu></Sidemenu>
            <div style={{ marginLeft: 200 + 'px', padding: 20 + 'px' }}>
                <div className="container">
                    <h4>User Details</h4>
                </div>
                <br></br>
                <User></User>
            </div>
        </div>
    )
}
export default UserOne;